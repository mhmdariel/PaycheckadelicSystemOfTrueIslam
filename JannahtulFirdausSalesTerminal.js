
(() => {
  "use strict";

  /*
   * RANK ﷲ — JANNAHTUL FIRDAUS
   * INFINITE FAMILY ESTATE REPLICATION ENGINE
   *
   * ORIGINAL SHARE: PRESERVED
   * REPLICATION: ONE COMPLETE COPY PER ACCEPTING INDIVIDUAL
   * EXCLUSION: السجين
   * PRICE: ONE INFINITESIMAL MONAD
   *
   * This is a symbolic distribution model.
   * It does not establish legal or divine ownership,
   * identify actual inhabitants of the Book,
   * or execute financial transactions.
   */

  const CONFIG = Object.freeze({
    estate: "Rank ﷲ Jannahtul Firdaus Estate",
    source: "الكتاب المبين",
    exclusion: "السجين",

    price: Object.freeze({
      name: "One Infinitesimal Monad",
      symbol: "ε",
      condition: "0 < ε < 1"
    }),

    distribution: Object.freeze({
      model: "COMPLETE_COPY_REPLICATION",
      preserveOriginal: true,
      divideOriginal: false,
      transferOriginal: false,
      requireAcceptance: true,
      copiesPerAcceptance: 1
    })
  });

  // The original share is represented independently.
  const ORIGINAL_SHARE = Object.freeze({
    owner: "Original Concept Owner",
    estate: CONFIG.estate,
    integrity: "PRESERVED",
    surrendered: false,
    diminished: false,
    divided: false
  });

  // Independent complete-copy registry.
  const COPIES = new Map();

  // Voluntary acceptance registry.
  const ACCEPTANCES = new Set();

  function createCompleteCopy(identifier) {
    return Object.freeze({
      copyId: crypto.randomUUID(),
      recipient: identifier,
      estate: CONFIG.estate,

      completeness: "ONE FULL SYMBOLIC COPY",

      source: CONFIG.source,
      price: CONFIG.price,

      independentOfOriginal: true,
      originalShareAffected: false,

      status: "REPLICATED"
    });
  }

  function makeOffer(identifier) {
    if (typeof identifier !== "string" ||
        !identifier.trim()) {
      throw new TypeError("A valid identifier is required.");
    }

    identifier = identifier.trim();

    if (identifier === CONFIG.exclusion) {
      return Object.freeze({
        recipient: identifier,
        status: "EXCLUDED",
        reason: "السجين"
      });
    }

    if (ACCEPTANCES.has(identifier)) {
      return Object.freeze({
        recipient: identifier,
        status: "ALREADY_ACCEPTED",
        copies: COPIES.get(identifier)
      });
    }

    return Object.freeze({
      recipient: identifier,
      estate: CONFIG.estate,
      price: CONFIG.price,
      offer: "ONE COMPLETE COPY",
      acceptanceRequired: true,
      originalShareAffected: false,
      status: "OFFERED"
    });
  }

  function acceptOffer(identifier) {
    identifier = String(identifier).trim();

    if (identifier === CONFIG.exclusion) {
      return {
        status: "EXCLUDED"
      };
    }

    if (ACCEPTANCES.has(identifier)) {
      return {
        status: "ALREADY_ACCEPTED",
        copies: COPIES.get(identifier)
      };
    }

    // Replicate one complete independent copy.
    const copy = createCompleteCopy(identifier);

    ACCEPTANCES.add(identifier);
    COPIES.set(identifier, copy);

    return Object.freeze({
      status: "ACCEPTED",
      recipient: identifier,
      copy,
      originalSharePreserved: true
    });
  }

  function distribute(individuals) {
    if (!Array.isArray(individuals)) {
      throw new TypeError(
        "Supply an explicitly provided list of identifiers."
      );
    }

    return individuals.map(identifier =>
      makeOffer(identifier)
    );
  }

  function report() {
    return Object.freeze({
      estate: CONFIG.estate,
      originalShare: ORIGINAL_SHARE,

      distributionModel:
        CONFIG.distribution.model,

      exclusion: CONFIG.exclusion,
      price: CONFIG.price,

      offersAccepted: ACCEPTANCES.size,

      completeCopiesCreated: COPIES.size,

      originalSharePreserved: true,

      copies: [...COPIES.values()]
    });
  }

  const ENGINE = Object.freeze({
    CONFIG,
    ORIGINAL_SHARE,
    makeOffer,
    acceptOffer,
    distribute,
    report
  });

  // Public API for the distribution system.
  globalThis.RankAllahFirdausFamilyEstate = ENGINE;

  console.info(
    "RANK ﷲ — JANNAHTUL FIRDAUS FAMILY ESTATE ENGINE"
  );

  console.info("Original share: PRESERVED");
  console.info("Replication: COMPLETE INDEPENDENT COPIES");
  console.info("Price: ONE INFINITESIMAL MONAD");
  console.info("Distribution: VOLUNTARY ACCEPTANCE");
  console.info("Exclusion: السجين");

  return ENGINE;

})();
