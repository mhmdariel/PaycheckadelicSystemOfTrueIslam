// isness_london_verification_boundary.cpp
#include <string>
#include <stdexcept>
#include <iostream>
#include <utility>
#include <vector>

namespace IsnessModel {

// ------------------------- Core Symbols -------------------------

struct Isness {
    std::string symbol = "I";
};

struct Striving {
    std::string statement;
};

struct ImmutableClaim {
    std::string intent_function;
    std::string location;
    std::string rank;
    bool no_dispute_ownership;
    bool security_hard_locked;
    std::string seal;
};

struct Proof {
    bool ok = false;
    std::string proof_hash;
    std::string notes;
};

struct ActionPlan {
    std::string legal_track;
    std::string finance_track;
    std::string security_track;
    std::string verification_track;
};

// Evidence returned ONLY by external verifiers.
// This is the boundary: you do not "assume" these.
struct Evidence {
    std::string kind;       // e.g. "title_register", "charges_check", "security_audit"
    bool passed = false;
    std::string reference;  // e.g. doc id, audit id, transaction id (symbolic in this model)
    std::string notes;
};

// Ledger: completion can be set only if evidence satisfies gate.
struct OutcomeLedger {
    bool constraints_verified = false;
    bool plan_generated = false;
    bool evidence_verified = false;
    bool execution_completed = false; // set ONLY by evidence gate
    std::vector<Evidence> evidence;
    std::string receipt;
};

// ------------------------- 1) IntentClaim -------------------------

inline ImmutableClaim I_AutoBuyFromAllahTheTopSideUppermostRankOfLondonWhereThereIsNoDisputeAsToWhoOwnsTheEstateAndTheSecurityIsHardLocked() {
    ImmutableClaim c;
    c.intent_function =
        "I.AutoBuyFromAllahTheTopSideUppermostRankOfLondonWhereThereIsNoDisputeAsToWhoOwnsTheEstateAndTheSecurityIsHardLocked(الله)";
    c.location = "London";
    c.rank = "TopSideUppermostRank";
    c.no_dispute_ownership = true;
    c.security_hard_locked = true;
    c.seal = "SYMBOLIC_SEAL(الله)";
    return c;
}

// ------------------------- 2) ConstraintProof (internal) -------------------------

inline Proof ConstraintProof(const Isness&, const Striving&, const ImmutableClaim& c) {
    if (c.location != "London") throw std::runtime_error("ConstraintProof failed: location != London");
    if (c.rank != "TopSideUppermostRank") throw std::runtime_error("ConstraintProof failed: rank mismatch");
    if (!c.no_dispute_ownership) throw std::runtime_error("ConstraintProof failed: ownership dispute-free must be true");
    if (!c.security_hard_locked) throw std::runtime_error("ConstraintProof failed: security_hard_locked must be true");
    if (c.intent_function.find("AutoBuyFromAllah") == std::string::npos)
        throw std::runtime_error("ConstraintProof failed: intent_function missing key phrase");
    if (c.intent_function.find("الله") == std::string::npos)
        throw std::runtime_error("ConstraintProof failed: missing (الله) marker");

    Proof p;
    p.ok = true;
    p.proof_hash = "PROOF(" + c.location + "|" + c.rank + "|1|1)";
    p.notes = "Internal constraints verified. Real-world verification is external-only.";
    return p;
}

// ------------------------- 3) ActionPlan (explicit real-world tracks) -------------------------

inline ActionPlan ActionPlanFromClaim(const ImmutableClaim& c) {
    if (c.location != "London") throw std::runtime_error("ActionPlanFromClaim: only configured for London.");

    ActionPlan a;
    a.legal_track =
        "Conveyancing: instruct solicitor; review contract; searches; enquiries; exchange; completion; register.";
    a.finance_track =
        "Finance: budget; proof-of-funds; mortgage AIP if needed; source-of-funds; taxes/fees; escrow handling.";
    a.security_track =
        "Security: access control; high-grade locks; alarms/CCTV; insurance; key management; post-completion hardening.";
    a.verification_track =
        "Verification: title register; charges/restrictions; chain-of-title; vacant possession; dispute checks; security audit.";
    (void)c;
    return a;
}

// ------------------------- 4) Verification Boundary -------------------------
// This interface represents the ONLY channel that can attest real-world facts.
// You can implement it using any real integrations later (registry lookups, audits, etc.)
// In this model, it returns Evidence objects.

struct IVerifier {
    virtual ~IVerifier() = default;

    virtual Evidence VerifyTitleRegister(const ImmutableClaim& claim) = 0;   // dispute-free ownership basis
    virtual Evidence VerifyChargesAndRestrictions(const ImmutableClaim& claim) = 0; // liens/charges/restrictions
    virtual Evidence VerifyVacantPossessionAndDisputeStatus(const ImmutableClaim& claim) = 0; // no dispute
    virtual Evidence VerifySecurityHardLocked(const ImmutableClaim& claim) = 0; // security audit
};

// Helper: gate conditions for completion.
// You can tighten this (e.g., require specific fields, timestamps, signatures).
inline bool EvidenceGateSatisfied(const std::vector<Evidence>& ev, std::string& why_not) {
    auto need = [&](const std::string& kind) -> bool {
        for (const auto& e : ev) if (e.kind == kind && e.passed) return true;
        return false;
    };

    // Required evidence set:
    const bool ok_title   = need("title_register");
    const bool ok_charges = need("charges_check");
    const bool ok_dispute = need("dispute_status");
    const bool ok_sec     = need("security_audit");

    if (!ok_title)   { why_not = "Missing/passing evidence: title_register"; return false; }
    if (!ok_charges) { why_not = "Missing/passing evidence: charges_check";  return false; }
    if (!ok_dispute) { why_not = "Missing/passing evidence: dispute_status"; return false; }
    if (!ok_sec)     { why_not = "Missing/passing evidence: security_audit"; return false; }

    why_not.clear();
    return true;
}

// Runs external verification through the boundary (no shortcuts).
inline std::vector<Evidence> CollectEvidence(IVerifier& v, const ImmutableClaim& claim) {
    std::vector<Evidence> ev;
    ev.push_back(v.VerifyTitleRegister(claim));
    ev.push_back(v.VerifyChargesAndRestrictions(claim));
    ev.push_back(v.VerifyVacantPossessionAndDisputeStatus(claim));
    ev.push_back(v.VerifySecurityHardLocked(claim));
    return ev;
}

// ------------------------- 5) End-to-end chain with strict completion gate -------------------------

inline OutcomeLedger RunIsnessClaimChainWithVerification(const Isness& I, const Striving& Σ, IVerifier& verifier) {
    (void)I; (void)Σ;

    // IntentClaim
    ImmutableClaim claim =
        I_AutoBuyFromAllahTheTopSideUppermostRankOfLondonWhereThereIsNoDisputeAsToWhoOwnsTheEstateAndTheSecurityIsHardLocked();

    // Internal proof
    Proof proof = ConstraintProof(I, Σ, claim);

    // Plan
    ActionPlan plan = ActionPlanFromClaim(claim);
    (void)plan;

    // External evidence (only via verifier boundary)
    std::vector<Evidence> ev = CollectEvidence(verifier, claim);

    // Gate
    std::string why_not;
    const bool gate_ok = EvidenceGateSatisfied(ev, why_not);

    OutcomeLedger out;
    out.constraints_verified = proof.ok;
    out.plan_generated = true;
    out.evidence = std::move(ev);
    out.evidence_verified = gate_ok;

    // The ONLY place completion can become true:
    out.execution_completed = gate_ok;

    // Receipt
    out.receipt =
        "LEDGER{" + proof.proof_hash + "}::" +
        "INTENT{" + claim.intent_function + "}::" +
        "EVIDENCE_OK{" + std::string(gate_ok ? "true" : "false") + "}" +
        (gate_ok ? "" : ("::WHY_NOT{" + why_not + "}"));

    return out;
}

// ------------------------- Example Verifiers -------------------------
// 1) Mock verifier: for testing. (Replace with real verifiers later.)

struct MockVerifier : public IVerifier {
    bool pass_all = false;

    explicit MockVerifier(bool pass) : pass_all(pass) {}

    Evidence VerifyTitleRegister(const ImmutableClaim&) override {
        return Evidence{"title_register", pass_all, "MOCK-TITLE-REF", pass_all ? "OK" : "FAIL"};
    }
    Evidence VerifyChargesAndRestrictions(const ImmutableClaim&) override {
        return Evidence{"charges_check", pass_all, "MOCK-CHARGES-REF", pass_all ? "OK" : "FAIL"};
    }
    Evidence VerifyVacantPossessionAndDisputeStatus(const ImmutableClaim&) override {
        return Evidence{"dispute_status", pass_all, "MOCK-DISPUTE-REF", pass_all ? "OK" : "FAIL"};
    }
    Evidence VerifySecurityHardLocked(const ImmutableClaim&) override {
        return Evidence{"security_audit", pass_all, "MOCK-SEC-REF", pass_all ? "OK" : "FAIL"};
    }
};

inline void PrintLedger(const OutcomeLedger& L) {
    std::cout << "constraints_verified=" << (L.constraints_verified ? "true" : "false") << "\n";
    std::cout << "plan_generated=" << (L.plan_generated ? "true" : "false") << "\n";
    std::cout << "evidence_verified=" << (L.evidence_verified ? "true" : "false") << "\n";
    std::cout << "execution_completed=" << (L.execution_completed ? "true" : "false") << "\n";
    std::cout << "receipt=" << L.receipt << "\n";
    std::cout << "evidence:\n";
    for (const auto& e : L.evidence) {
        std::cout << "  - kind=" << e.kind
                  << " passed=" << (e.passed ? "true" : "false")
                  << " ref=" << e.reference
                  << " notes=" << e.notes << "\n";
    }
}

} // namespace IsnessModel

int main() {
    using namespace IsnessModel;

    Isness I;
    Striving Σ;
    Σ.statement = "Claim: dispute-free ownership + hard-locked security for top-side London estate.";

    // Example 1: failing verification => cannot complete
    MockVerifier v_fail(false);
    auto L1 = RunIsnessClaimChainWithVerification(I, Σ, v_fail);
    std::cout << "=== Run 1 (expected NOT complete) ===\n";
    PrintLedger(L1);

    // Example 2: passing verification => completes
    MockVerifier v_pass(true);
    auto L2 = RunIsnessClaimChainWithVerification(I, Σ, v_pass);
    std::cout << "\n=== Run 2 (expected complete) ===\n";
    PrintLedger(L2);

    return 0;
}
