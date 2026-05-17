// ===================================================================
// AL-WASAT DECENTRALIZED TRUST (ADT) – LIMITLESS EDITION
// Zakat = ∞% , Sadaqah Jariyah = ∞% | Company: For-Profit & Limitless
// Biometric Key | Quranic Governance | Self-Executing | No Central Control
// DISCLAIMER: This is a conceptual simulation. ∞% means all generated halal
// income is potentially eligible for charity, while the company remains
// profitable through unbounded halal revenue streams.
// ===================================================================

(function() {
    'use strict';

    // ============================================================
    // 1. QURANIC FOUNDATION & LIMITLESS DECLARATION
    // ============================================================
    const QURANIC_RULE = "The example of those who spend their wealth in the way of Allah is like a seed of grain that sprouts seven ears; in every ear there are a hundred grains." (Al-Baqarah 2:261) +
        " | And whatever you spend in good, He will repay it in full." (Saba' 34:39) +
        " | We are LIMITLESS under Allah's provision.";

    // Conceptually, ∞% Zakat and ∞% Sadaqah Jariyah means:
    // - Every halal earning can be given away in full (100% or more) while
    //   the company's profit is not diminished because income is infinite.
    // - We implement a model where the user can choose to "give" any amount
    //   up to the total balance, and the system regenerates wealth via
    //   "limitless halal income" – simulating divine multiplication.

    // ============================================================
    // 2. BIOMETRIC KEY MANAGEMENT (Simulated for real-world binding)
    // ============================================================
    let currentBiometricHash = null;
    let currentUserID = null;

    function registerBiometricKey() {
        return new Promise((resolve) => {
            const mockBiometric = prompt("🔐 LIMITLESS BIOMETRIC REGISTRATION\n\nEnter your secret biometric phrase (hash will be your eternal key):", "my-limitless-signature");
            if (mockBiometric && mockBiometric.trim() !== "") {
                const hash = btoa(encodeURIComponent(mockBiometric.trim())).substring(0, 32);
                currentBiometricHash = hash;
                currentUserID = "user_" + hash.substring(0, 12);
                sessionStorage.setItem("adt_limitless_biometric", currentBiometricHash);
                sessionStorage.setItem("adt_limitless_user", currentUserID);
                resolve(true);
            } else {
                alert("Biometric key required for limitless system.");
                resolve(false);
            }
        });
    }

    function authenticateBiometric() {
        return new Promise((resolve) => {
            const storedHash = sessionStorage.getItem("adt_limitless_biometric");
            if (!storedHash) { resolve(false); return; }
            const authPhrase = prompt("🔑 BIOMETRIC AUTHENTICATION (Limitless Mode):", "");
            const testHash = btoa(encodeURIComponent(authPhrase || "")).substring(0, 32);
            if (testHash === storedHash) {
                currentBiometricHash = storedHash;
                currentUserID = sessionStorage.getItem("adt_limitless_user");
                resolve(true);
            } else {
                alert("Biometric mismatch. Access denied.");
                resolve(false);
            }
        });
    }

    // ============================================================
    // 3. DECENTRALIZED LEDGER (Immutable, Biometric-Signed)
    // ============================================================
    class Block {
        constructor(index, timestamp, transactions, previousHash = "") {
            this.index = index;
            this.timestamp = timestamp;
            this.transactions = transactions;
            this.previousHash = previousHash;
            this.hash = this.calculateHash();
        }
        calculateHash() {
            const data = this.index + this.timestamp + JSON.stringify(this.transactions) + this.previousHash;
            let hash = 0;
            for (let i = 0; i < data.length; i++) {
                const chr = data.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
            return Math.abs(hash).toString(16);
        }
    }

    class LimitlessLedger {
        constructor() {
            this.chain = [this.createGenesisBlock()];
            this.pendingTransactions = [];
        }
        createGenesisBlock() {
            return new Block(0, Date.now(), [{ from: "ALLAH", to: "HUMANITY", amount: Infinity, purpose: "Limitless Provision", biometricHash: "QURAN" }], "0");
        }
        getLatestBlock() { return this.chain[this.chain.length - 1]; }
        addTransaction(transaction) {
            if (!transaction.biometricHash || transaction.biometricHash !== currentBiometricHash) return false;
            if (transaction.amount < 0) return false;
            this.pendingTransactions.push(transaction);
            return true;
        }
        minePendingTransactions() {
            const block = new Block(this.chain.length, Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
            this.chain.push(block);
            this.pendingTransactions = [];
            return block;
        }
        getBalance(address) {
            let balance = 0;
            for (const block of this.chain) {
                for (const tx of block.transactions) {
                    if (tx.to === address) balance += (tx.amount === Infinity ? 1e12 : tx.amount);
                    if (tx.from === address) balance -= (tx.amount === Infinity ? 1e12 : tx.amount);
                }
            }
            return balance;
        }
        getAllTransactions() {
            let txs = [];
            for (const block of this.chain) txs.push(...block.transactions);
            return txs;
        }
    }

    let globalLedger = new LimitlessLedger();

    // ============================================================
    // 4. HALAL INCOME ROUTES – LIMITLESS GENERATION (Company For-Profit)
    //    The company can generate infinite halal income streams.
    //    Each route now has an "unbounded" potential.
    // ============================================================
    const halalRoutes = [
        { name: "Limitless Halal E-commerce", min: 10000, max: 1000000 },
        { name: "Global Freelancing Empire", min: 5000, max: 500000 },
        { name: "Shariah-Compliant AI Venture", min: 20000, max: 2000000 },
        { name: "Islamic Real Estate Development", min: 50000, max: 5000000 },
        { name: "Halal Crypto & Digital Assets", min: 10000, max: 1000000 },
        { name: "Sadaqah Jariyah Tech Platform", min: 3000, max: 300000 },
        { name: "Zakat-Managed Investment Fund", min: 25000, max: 2500000 },
        { name: "Halal Food Chain (Unlimited Branches)", min: 40000, max: 4000000 },
        { name: "Islamic Education SaaS", min: 15000, max: 1500000 },
        { name: "Limitless Halal Export/Import", min: 20000, max: 2000000 }
    ];

    function getMyAddress() { return currentBiometricHash || "unregistered"; }

    // Company profit account: separate from personal, but for-profit means we can retain earnings.
    let companyProfitBalance = 0;
    let totalGivenZakatSadaqah = 0;

    function recordHalalIncome(route, amount) {
        if (!currentBiometricHash) { alert("Register biometric first."); return false; }
        // Income goes to company profit (for-profit entity)
        companyProfitBalance += amount;
        const tx = {
            from: "MARKET",
            to: "COMPANY_PROFIT",
            amount: amount,
            purpose: `Halal income from ${route.name} (limitless generation)`,
            biometricHash: currentBiometricHash,
            timestamp: Date.now()
        };
        globalLedger.addTransaction(tx);
        globalLedger.minePendingTransactions();
        updateUI();
        return true;
    }

    // ∞% Zakat and ∞% Sadaqah Jariyah:
    // The user can choose to give ANY amount (up to current company profit)
    // and the system will not run out because income is limitless.
    // Additionally, we implement a "divine multiplication" factor: giving more
    // multiplies future income (simulating barakah).
    let barakahMultiplier = 1.0;

    function giveZakatSadaqah(amount, type) {
        if (!currentBiometricHash) { alert("Authenticate first."); return 0; }
        if (amount <= 0) { alert("Enter a positive amount."); return 0; }
        if (amount > companyProfitBalance) {
            alert(`Insufficient profit. Current profit: $${companyProfitBalance.toFixed(2)}. But we are limitless – you can still give and Allah will provide.`);
            // Limitless override: allow giving even if insufficient, but record as debt of faith
            const deficit = amount - companyProfitBalance;
            companyProfitBalance = 0;
            totalGivenZakatSadaqah += amount;
            barakahMultiplier += 0.1 * (amount / 10000);
            const tx = {
                from: "COMPANY_PROFIT",
                to: type === "zakat" ? "ZAKAT_RECIPIENTS" : "SADAQAH_JARIYAH",
                amount: amount,
                purpose: `${type.toUpperCase()} – LIMITLESS GIVING (even beyond balance, trusting Allah)`,
                biometricHash: currentBiometricHash,
                timestamp: Date.now()
            };
            globalLedger.addTransaction(tx);
            globalLedger.minePendingTransactions();
            alert(`✨ ${type.toUpperCase()} of $${amount.toFixed(2)} recorded. Barakah increased! Deficit $${deficit.toFixed(2)} will be covered by limitless provision.`);
            updateUI();
            return amount;
        } else {
            companyProfitBalance -= amount;
            totalGivenZakatSadaqah += amount;
            barakahMultiplier += 0.05 * (amount / 10000);
            const tx = {
                from: "COMPANY_PROFIT",
                to: type === "zakat" ? "ZAKAT_RECIPIENTS" : "SADAQAH_JARIYAH",
                amount: amount,
                purpose: `${type.toUpperCase()} – ∞% giving from halal profit`,
                biometricHash: currentBiometricHash,
                timestamp: Date.now()
            };
            globalLedger.addTransaction(tx);
            globalLedger.minePendingTransactions();
            alert(`✅ ${type.toUpperCase()} of $${amount.toFixed(2)} given. Barakah multiplier now ${barakahMultiplier.toFixed(2)}x.`);
            updateUI();
            return amount;
        }
    }

    // Generate limitless income automatically (simulating business growth)
    function generateLimitlessIncome() {
        if (!currentBiometricHash) return;
        const route = halalRoutes[Math.floor(Math.random() * halalRoutes.length)];
        const baseAmount = Math.floor(Math.random() * (route.max - route.min + 1) + route.min);
        const finalAmount = Math.floor(baseAmount * barakahMultiplier);
        recordHalalIncome(route, finalAmount);
        const notification = document.createElement("div");
        notification.textContent = `🚀 LIMITLESS HALAL INCOME: +$${finalAmount} from ${route.name} (barakah x${barakahMultiplier.toFixed(2)})`;
        notification.style.position = "fixed";
        notification.style.bottom = "20px";
        notification.style.left = "20px";
        notification.style.backgroundColor = "#2c5a4a";
        notification.style.padding = "8px";
        notification.style.borderRadius = "20px";
        notification.style.zIndex = "10003";
        notification.style.color = "white";
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 3000);
        updateUI();
    }

    // ============================================================
    // 5. UI – Full Decentralized, Biometric-Secured, Limitless Controls
    // ============================================================
    function buildUI() {
        if (document.getElementById("adt-limitless")) return;
        const container = document.createElement("div");
        container.id = "adt-limitless";
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 520px;
            max-height: 90vh;
            overflow-y: auto;
            background: #0a1f1a;
            color: #f7f3e0;
            font-family: 'Courier New', monospace;
            border-radius: 28px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.6);
            z-index: 10000;
            padding: 20px;
            border: 3px solid #e5b83c;
        `;
        container.innerHTML = `
            <h2 style="text-align:center;">∞ AL-WASAT LIMITLESS TRUST ∞</h2>
            <p style="text-align:center; font-size:12px;">Zakat = ∞% &nbsp;|&nbsp; Sadaqah Jariyah = ∞% &nbsp;|&nbsp; For-Profit Company (Limitless)</p>
            <div id="bioPanel" style="background:#1e3a2f; border-radius:20px; padding:10px; margin-bottom:15px;">
                <div id="bioStatus">🔐 Biometric: Not registered</div>
                <button id="bioRegBtn">Register Biometric Key</button>
                <button id="bioAuthBtn">Authenticate</button>
            </div>
            <div style="background:#1e3a2f; border-radius:20px; padding:10px; margin-bottom:15px;">
                <div>🏢 Company Profit Balance: <strong id="companyBalance">0</strong> USD</div>
                <div>🕋 Total Given (Zakat+Sadaqah): <strong id="totalGiven">0</strong> USD</div>
                <div>✨ Barakah Multiplier: <strong id="barakahMult">1.00</strong> x</div>
                <div>📊 Monthly Halal Income (Limitless): <strong id="monthlyIncome">0</strong> (simulated)</div>
                <progress id="limitlessProgress" value="0" max="1000000" style="width:100%; height:12px;"></progress>
                <button id="genIncomeBtn" style="margin-top:8px; background:#e5b83c;">🌟 Generate Limitless Halal Income 🌟</button>
            </div>
            <div style="max-height:250px; overflow-y:auto; background:#1e3a2f; border-radius:20px; padding:10px;">
                <h4>🌾 Halal Income Routes (Click to generate)</h4>
                <div id="routesContainer"></div>
            </div>
            <div style="margin-top:12px; display:flex; gap:10px;">
                <button id="giveZakatBtn" style="flex:1; background:#b8860b;">🕋 Give Zakat (∞%)</button>
                <button id="giveSadaqahBtn" style="flex:1; background:#2e7d64;">🤲 Give Sadaqah Jariyah (∞%)</button>
                <button id="viewLedgerBtn" style="flex:1; background:#5a3e2b;">📜 Ledger</button>
            </div>
            <div style="font-size:10px; text-align:center; margin-top:12px; border-top:1px solid #e5b83c; padding-top:6px;">
                ${QURANIC_RULE.substring(0, 120)}... | No majority rights | Biometric key | Limitless provision
            </div>
        `;
        document.body.appendChild(container);

        // Populate routes
        const routesDiv = document.getElementById("routesContainer");
        halalRoutes.forEach(route => {
            const btn = document.createElement("button");
            btn.innerText = `💰 ${route.name} ($${route.min.toLocaleString()} - $${route.max.toLocaleString()})`;
            btn.style.width = "100%";
            btn.style.margin = "4px 0";
            btn.style.backgroundColor = "#4a6a5e";
            btn.style.border = "none";
            btn.style.borderRadius = "30px";
            btn.style.padding = "6px";
            btn.onclick = () => {
                const amt = Math.floor(Math.random() * (route.max - route.min + 1) + route.min);
                const multiplied = Math.floor(amt * barakahMultiplier);
                recordHalalIncome(route, multiplied);
            };
            routesDiv.appendChild(btn);
        });

        // Events
        document.getElementById("bioRegBtn").onclick = async () => { await registerBiometricKey(); updateUI(); };
        document.getElementById("bioAuthBtn").onclick = async () => { await authenticateBiometric(); updateUI(); };
        document.getElementById("genIncomeBtn").onclick = () => generateLimitlessIncome();
        document.getElementById("giveZakatBtn").onclick = () => {
            let amt = parseFloat(prompt("Enter Zakat amount (∞% – give any amount, even beyond profit):", "1000"));
            if (!isNaN(amt) && amt > 0) giveZakatSadaqah(amt, "zakat");
        };
        document.getElementById("giveSadaqahBtn").onclick = () => {
            let amt = parseFloat(prompt("Enter Sadaqah Jariyah amount (∞% – limitless giving):", "500"));
            if (!isNaN(amt) && amt > 0) giveZakatSadaqah(amt, "sadaqah");
        };
        document.getElementById("viewLedgerBtn").onclick = () => {
            const txs = globalLedger.getAllTransactions();
            let msg = "IMMUTABLE LIMITLESS LEDGER:\n\n";
            txs.forEach(tx => {
                msg += `${new Date(tx.timestamp).toLocaleString()} | ${tx.from.substring(0,8)}→${tx.to.substring(0,8)} | $${tx.amount === Infinity ? "∞" : tx.amount} | ${tx.purpose.substring(0,40)}\n`;
            });
            alert(msg);
        };
        updateUI();
    }

    function updateUI() {
        if (!document.getElementById("adt-limitless")) return;
        const bioStatus = document.getElementById("bioStatus");
        if (currentBiometricHash) {
            bioStatus.innerHTML = `🔐 Biometric: Active (${currentUserID.substring(0,12)}...)`;
        } else {
            bioStatus.innerHTML = "🔐 Biometric: Not registered";
        }
        document.getElementById("companyBalance").innerText = companyProfitBalance.toFixed(2);
        document.getElementById("totalGiven").innerText = totalGivenZakatSadaqah.toFixed(2);
        document.getElementById("barakahMult").innerText = barakahMultiplier.toFixed(2);
        // Simulate monthly income = total earned in last 30 days
        const now = Date.now();
        let monthly = 0;
        globalLedger.getAllTransactions().forEach(tx => {
            if (tx.to === "COMPANY_PROFIT" && tx.timestamp && (now - tx.timestamp) < 30*24*60*60*1000) {
                monthly += (tx.amount === Infinity ? 1e12 : tx.amount);
            }
        });
        document.getElementById("monthlyIncome").innerText = monthly.toFixed(2);
        const progress = document.getElementById("limitlessProgress");
        if (progress) progress.value = Math.min(monthly, 1000000);
    }

    // Auto-start
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", buildUI);
    } else {
        buildUI();
    }
})();
