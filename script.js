    // ── DATA ──
    const ingredients = [
    { num: 1, name: "Chebe Powder", cat: "Extracts" },
    { num: 2, name: "Xanthan Gum", cat: "Emulsifiers" },
    { num: 3, name: "Xanthan Gum Clear", cat: "Emulsifiers" },
    { num: 4, name: "Aristoflex AVC Powder", cat: "Emulsifiers" },
    { num: 5, name: "Allantoin Powder", cat: "Actives" },
    { num: 6, name: "Alpha Arbutin Powder", cat: "Actives" },
    { num: 7, name: "Cetyl Alcohol", cat: "Emulsifiers" },
    { num: 8, name: "Cetearyl Alcohol", cat: "Emulsifiers" },
    { num: 9, name: "Coco Glucoside", cat: "Surfactants" },
    { num: 10, name: "Decyl Glucoside", cat: "Surfactants" },
    { num: 11, name: "Cocamidopropyl Betaine", cat: "Surfactants" },
    { num: 12, name: "Sodium Lauryl Ether Sulphate (SLES)", cat: "Surfactants" },
    { num: 13, name: "Vegetable Glycerin", cat: "Actives" },
    { num: 14, name: "HMW Hyaluronic Acid Powder", cat: "Actives" },
    { num: 15, name: "MMW Hyaluronic Acid Powder", cat: "Actives" },
    { num: 16, name: "LMW Hyaluronic Acid Powder", cat: "Actives" },
    { num: 17, name: "Hyaluronic Acid Solution 1%", cat: "Actives" },
    { num: 18, name: "Arrow Root Powder", cat: "Extracts" },
    { num: 19, name: "Kojic Acid Powder", cat: "Actives" },
    { num: 20, name: "Kojic Acid Dipalmitate", cat: "Actives" },
    { num: 21, name: "Phenoxyethanol", cat: "Preservatives" },
    { num: 22, name: "Emulsifying Wax NF", cat: "Emulsifiers" },
    { num: 23, name: "Stearic Acid", cat: "Emulsifiers" },
    { num: 24, name: "Germall Plus Liquid", cat: "Preservatives" },
    { num: 25, name: "Hydrolyzed Collagen Powder", cat: "Proteins" },
    { num: 26, name: "Licorice Direct Powder", cat: "Extracts" },
    { num: 27, name: "Sodium Lactate Liquid", cat: "Actives" },
    { num: 28, name: "Citric Acid", cat: "Actives" },
    { num: 29, name: "Aloe Vera Powder (Green)", cat: "Extracts" },
    { num: 30, name: "Aloe Gel Powder (White)", cat: "Extracts" },
    { num: 31, name: "Aloe Vera Freeze Dried Powder 100:1", cat: "Extracts" },
    { num: 32, name: "Aloe Vera Freeze Dried Powder 200:1", cat: "Extracts" },
    { num: 33, name: "Aloe Vera Gel", cat: "Extracts" },
    { num: 34, name: "Aloe Vera Juice", cat: "Extracts" },
    { num: 35, name: "Sorbic Acid", cat: "Preservatives" },
    { num: 36, name: "Agar Agar Powder", cat: "Emulsifiers" },
    { num: 37, name: "Carrageenan Gel Powder", cat: "Emulsifiers" },
    { num: 38, name: "Ferulic Acid", cat: "Actives" },
    { num: 39, name: "Isoamyl Laurate", cat: "Emulsifiers" },
    { num: 40, name: "DMDM Hydantoin", cat: "Preservatives" },
    { num: 41, name: "Camellia Seed Oil", cat: "Oils" },
    { num: 42, name: "Polysorbate 80", cat: "Emulsifiers" },
    { num: 43, name: "Polysorbate 60", cat: "Emulsifiers" },
    { num: 44, name: "Polysorbate 20", cat: "Emulsifiers" },
    { num: 45, name: "Beeswax White", cat: "Waxes" },
    { num: 46, name: "Beeswax Yellow", cat: "Waxes" },
    { num: 47, name: "Soy Wax", cat: "Waxes" },
    { num: 48, name: "Benzyl Alcohol", cat: "Preservatives" },
    { num: 55, name: "Shea Butter Refined", cat: "Oils" },
    { num: 56, name: "Shea Butter Unrefined (Light)", cat: "Oils" },
    { num: 57, name: "Shea Butter Unrefined (Dark)", cat: "Oils" },
    { num: 58, name: "Vitamin E Oil (Light Yellow)", cat: "Vitamins" },
    { num: 59, name: "Vitamin E Oil (Reddish Brown)", cat: "Vitamins" },
    { num: 60, name: "Hydrolyzed Keratin Powder", cat: "Proteins" },
    { num: 61, name: "Hydrolyzed Keratin Liquid", cat: "Proteins" },
    { num: 63, name: "Bakuchiol", cat: "Actives" },
    { num: 64, name: "Guar Gum", cat: "Emulsifiers" },
    { num: 65, name: "Cationic Guar Gum", cat: "Emulsifiers" },
    { num: 66, name: "Wheat Protein Powder", cat: "Proteins" },
    { num: 67, name: "Silk Protein Powder", cat: "Proteins" },
    { num: 68, name: "Hemp Protein", cat: "Proteins" },
    { num: 69, name: "Hydrolyzed Oat Protein Powder", cat: "Proteins" },
    { num: 70, name: "Colloidal Oat Powder", cat: "Proteins" },
    { num: 71, name: "Lupine Protein", cat: "Proteins" },
    { num: 72, name: "Quinoa Protein", cat: "Proteins" },
    { num: 73, name: "Pumpkin Protein", cat: "Proteins" },
    { num: 74, name: "Rice Protein Powder", cat: "Proteins" },
    { num: 83, name: "Sepi White MSH", cat: "Actives" },
    { num: 84, name: "Sym White 377", cat: "Actives" },
    { num: 85, name: "Hydroxyethyl Cellulose Powder", cat: "Emulsifiers" },
    { num: 86, name: "Hexapeptide-9", cat: "Proteins" },
    { num: 87, name: "Acetyl Octapeptide-3", cat: "Proteins" },
    { num: 88, name: "Co Q10", cat: "Actives" },
    { num: 89, name: "Azelaic Acid", cat: "Actives" },
    { num: 90, name: "Mandelic Acid", cat: "Actives" },
    { num: 93, name: "Sodium Lauryl Sulfoacetate (SLSA)", cat: "Surfactants" },
    { num: 94, name: "Candelilla Wax", cat: "Waxes" },
    { num: 97, name: "Vaseline", cat: "Emulsifiers" },
    { num: 107, name: "Palmitoyl Tripeptide-38", cat: "Proteins" },
    { num: 108, name: "Decapeptide-12", cat: "Proteins" },
    { num: 109, name: "Ascorbyl Glucoside", cat: "Vitamins" },
    { num: 111, name: "Idebenone", cat: "Actives" },
    { num: 113, name: "3-O Ethyl Ascorbic Acid", cat: "Vitamins" },
    { num: 114, name: "Urea", cat: "Actives" },
    { num: 118, name: "Dimethicone", cat: "Emulsifiers" },
    { num: 119, name: "Caprylic Capric Triglycerides (GTCC)", cat: "Oils" },
    { num: 129, name: "CETIOL HE", cat: "Emulsifiers" },
    { num: 135, name: "Guava Leaf Extract Liquid", cat: "Extracts" },
    { num: 136, name: "Licorice Extract Liquid", cat: "Extracts" },
    { num: 137, name: "Moringa Extract Liquid", cat: "Extracts" },
    { num: 138, name: "Papaya Extract Liquid", cat: "Extracts" },
    { num: 139, name: "Seaweed Extract Liquid", cat: "Extracts" },
    { num: 140, name: "Tea Tree Extract Liquid", cat: "Extracts" },
    { num: 141, name: "Witch Hazel Extract Liquid", cat: "Extracts" },
    { num: 142, name: "Snail Filtrate Liquid", cat: "Extracts" },
    { num: 143, name: "Maca Root Extract Liquid", cat: "Extracts" },
    { num: 144, name: "Chamomile Hydrosol", cat: "Hydrosols" },
    { num: 145, name: "Lemon Hydrosol", cat: "Hydrosols" },
    { num: 146, name: "Cucumber Hydrosol", cat: "Hydrosols" },
    { num: 147, name: "Witch Hazel Hydrosol", cat: "Hydrosols" },
    { num: 148, name: "Rose Hydrosol", cat: "Hydrosols" },
    { num: 149, name: "Lavender Hydrosol", cat: "Hydrosols" },
    { num: 150, name: "Aloe Hydrosol", cat: "Hydrosols" },
    { num: 151, name: "Iron Oxide Red", cat: "Pigments" },
    { num: 152, name: "Iron Oxide Yellow", cat: "Pigments" },
    { num: 153, name: "Iron Oxide Black", cat: "Pigments" },
    { num: 154, name: "Iron Oxide Blue", cat: "Pigments" },
    { num: 155, name: "Iron Oxide Green", cat: "Pigments" },
    { num: 156, name: "Sorbitol Liquid", cat: "Actives" },
    { num: 157, name: "Coconut Wax", cat: "Waxes" },
    { num: 158, name: "A165 (Glyceryl Stearate & PEG-100)", cat: "Emulsifiers" },
    { num: 159, name: "Papain", cat: "Actives" },
    { num: 160, name: "Salicylic Acid", cat: "Actives" },
    { num: 161, name: "Glutathione Powder", cat: "Actives" },
    { num: 162, name: "Niacinamide Powder", cat: "Actives" },
    { num: 163, name: "Tranexamic Acid", cat: "Actives" },
    { num: 164, name: "BTMS 50", cat: "Emulsifiers" },
    { num: 165, name: "BTMS 25", cat: "Emulsifiers" },
    { num: 166, name: "Propylene Glycol", cat: "Actives" },
    { num: 167, name: "Snow White Powder", cat: "Actives" },
    { num: 168, name: "Giga White Powder", cat: "Actives" },
    { num: 169, name: "Sodium Cocoyl Isethionate (SCI)", cat: "Surfactants" },
    { num: 170, name: "D-Panthenol Liquid", cat: "Vitamins" },
    { num: 171, name: "D-Panthenol Powder", cat: "Vitamins" },
    { num: 172, name: "Vitamin A Powder", cat: "Vitamins" },
    { num: 173, name: "Vitamin B1", cat: "Vitamins" },
    { num: 174, name: "Vitamin B2", cat: "Vitamins" },
    { num: 175, name: "Vitamin B3", cat: "Vitamins" },
    { num: 176, name: "Vitamin B5", cat: "Vitamins" },
    { num: 177, name: "Vitamin B7", cat: "Vitamins" },
    { num: 178, name: "Vitamin B9", cat: "Vitamins" },
    { num: 179, name: "Vitamin B12", cat: "Vitamins" },
    { num: 180, name: "Vitamin C", cat: "Vitamins" },
    { num: 181, name: "Vitamin D3", cat: "Vitamins" },
    { num: 182, name: "Vitamin E Powder", cat: "Vitamins" },
    { num: 183, name: "Lactic Acid Powder", cat: "Actives" },
    { num: 184, name: "Lactic Acid Liquid", cat: "Actives" },
    { num: 185, name: "Squalane", cat: "Oils" },
    { num: 186, name: "Squalene", cat: "Oils" },
    { num: 187, name: "Euxyl PE 9010", cat: "Preservatives" },
    { num: 188, name: "Baobab Oil", cat: "Oils" },
    { num: 189, name: "Black Currant Oil", cat: "Oils" },
    { num: 190, name: "Rosehip Oil", cat: "Oils" },
    { num: 191, name: "Rose Oil", cat: "Oils" },
    { num: 192, name: "Fenugreek Oil", cat: "Oils" },
    { num: 193, name: "Rosemary Oil", cat: "Oils" },
    { num: 194, name: "Jojoba Oil", cat: "Oils" },
    { num: 195, name: "Sunflower Oil", cat: "Oils" },
    { num: 196, name: "Safflower Oil", cat: "Oils" },
    { num: 197, name: "Apricot Kernel Oil", cat: "Oils" },
    { num: 198, name: "Macadamia Nut Oil", cat: "Oils" },
    { num: 199, name: "Avocado Oil", cat: "Oils" },
    { num: 200, name: "Lavender Oil", cat: "Oils" },
    { num: 201, name: "Carrot Seed Oil", cat: "Oils" },
    { num: 202, name: "Grape Seed Oil", cat: "Oils" },
    { num: 203, name: "Flaxseed Oil", cat: "Oils" },
    { num: 204, name: "Argan Oil", cat: "Oils" },
    { num: 205, name: "Sweet Almond Oil", cat: "Oils" },
    { num: 206, name: "Papaya Oil", cat: "Oils" },
    { num: 207, name: "Patchouli Oil", cat: "Oils" },
    { num: 208, name: "Tea Tree Oil", cat: "Oils" },
    { num: 209, name: "Green Tea Essential Oil", cat: "Oils" },
    { num: 210, name: "Bearberry Oil", cat: "Oils" },
    { num: 211, name: "Peppermint Oil", cat: "Oils" },
    { num: 212, name: "Grapefruit Oil", cat: "Oils" },
    { num: 213, name: "Batana Oil", cat: "Oils" },
    { num: 214, name: "Evening Primrose Oil", cat: "Oils" },
    { num: 215, name: "Cocoa Butter", cat: "Oils" },
    { num: 216, name: "Mango Butter", cat: "Oils" },
    { num: 218, name: "Carbomer 940", cat: "Emulsifiers" },
    { num: 219, name: "Carbomer 980", cat: "Emulsifiers" },
    { num: 220, name: "Carbomer U20", cat: "Emulsifiers" },
    { num: 222, name: "Glycolic Acid Liquid", cat: "Actives" },
    { num: 223, name: "Glycolic Acid Powder", cat: "Actives" },
    { num: 225, name: "GHK-Cu / Copper Peptide", cat: "Proteins" },
    { num: 226, name: "Palmitoyl Tetrapeptide-7", cat: "Proteins" },
    { num: 227, name: "Acetyl Tetrapeptide-3", cat: "Proteins" },
    { num: 228, name: "Hydroquinone", cat: "Actives" },
    { num: 229, name: "Beta Carotene", cat: "Vitamins" },
    { num: 230, name: "Pearl Powder", cat: "Actives" },
    { num: 231, name: "N-Acetyl-L-Cysteine (NAC)", cat: "Actives" },
    { num: 233, name: "Carnauba Wax", cat: "Waxes" },
    { num: 234, name: "Mulberry Powder", cat: "Extracts" },
    { num: 235, name: "Blueberry Powder", cat: "Extracts" },
    { num: 236, name: "Raspberry Powder", cat: "Extracts" },
    { num: 237, name: "Green Tea Powder", cat: "Extracts" },
    { num: 238, name: "Almond Powder", cat: "Extracts" },
    { num: 239, name: "Lemon Powder", cat: "Extracts" },
    { num: 240, name: "Sodium Cocoyl Glutamate Powder", cat: "Surfactants" },
    { num: 241, name: "Matcha Powder", cat: "Extracts" },
    { num: 245, name: "Pink Kaolin Powder", cat: "Actives" },
    { num: 246, name: "White Kaolin Powder", cat: "Actives" },
    { num: 247, name: "Titanium Dioxide Powder", cat: "Pigments" },
    { num: 250, name: "Bis-Aminopropyl Diglycol Dimaleate", cat: "Actives" },
    { num: 252, name: "Goat Milk Powder", cat: "Proteins" },
    { num: 255, name: "Bentonite Clay", cat: "Actives" },
    { num: 258, name: "France Green Clay", cat: "Actives" },
    { num: 260, name: "Pentapeptide-18", cat: "Proteins" },
    { num: 264, name: "Melatonin", cat: "Actives" },
    { num: 268, name: "Ellagic Acid", cat: "Actives" },
    { num: 269, name: "Astaxanthin Powder 5%", cat: "Actives" },
    { num: 270, name: "Astaxanthin Powder 10%", cat: "Actives" },
    { num: 271, name: "Calamine Powder", cat: "Actives" },
    { num: 275, name: "Tretinoin", cat: "Actives" },
    { num: 278, name: "Bifida Ferment Lysate Liquid", cat: "Actives" },
    { num: 280, name: "Bisabolol", cat: "Actives" },
    { num: 289, name: "Candelilla Wax", cat: "Waxes" },
    { num: 294, name: "Aloe Vera Extract Liquid", cat: "Extracts" },
    { num: 295, name: "Avocado Extract Liquid", cat: "Extracts" },
    { num: 296, name: "Bearberry Extract Liquid", cat: "Extracts" },
    { num: 297, name: "Calendula Extract Liquid", cat: "Extracts" },
    { num: 298, name: "Carrot Extract Liquid", cat: "Extracts" },
    { num: 299, name: "Chamomile Extract Liquid", cat: "Extracts" },
    { num: 300, name: "Cucumber Extract Liquid", cat: "Extracts" },
    { num: 301, name: "Grapefruit Extract Liquid", cat: "Extracts" },
    { num: 302, name: "Green Tea Extract Liquid", cat: "Extracts" },
    { num: 303, name: "Calendula Officinalis Hydrosol", cat: "Hydrosols" },
    { num: 304, name: "Neroli Hydrosol", cat: "Hydrosols" },
    { num: 305, name: "Mint Hydrosol", cat: "Hydrosols" },
    { num: 306, name: "Centella Asiatica Hydrosol", cat: "Hydrosols" },
    { num: 307, name: "Green Tea Hydrosol", cat: "Hydrosols" },
    { num: 308, name: "Tea Tree Hydrosol", cat: "Hydrosols" },
    { num: 309, name: "Rosemary Hydrosol", cat: "Hydrosols" },
    { num: 310, name: "Iron Oxide Orange", cat: "Pigments" },
    { num: 311, name: "Iron Oxide Brown", cat: "Pigments" },
    { num: 312, name: "Iron Oxide Purple", cat: "Pigments" },
    { num: 313, name: "Iron Oxide White", cat: "Pigments" },
    { num: 317, name: "Aluminium Stearate", cat: "Emulsifiers" },
    { num: 318, name: "Bromelain", cat: "Actives" },
    ];

    let currentCat = "all";
    let currentSearch = "";
    let visibleCount = 48;

    function getFiltered() {
    return ingredients.filter((i) => {
        const matchCat = currentCat === "all" || i.cat === currentCat;
        const matchSearch = i.name
        .toLowerCase()
        .includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });
    }

    function renderGrid() {
    const filtered = getFiltered();
    const grid = document.getElementById("catalogueGrid");
    const countEl = document.getElementById("countNum");
    const loadWrap = document.getElementById("loadMoreWrap");
    const shown = filtered.slice(0, visibleCount);

    grid.innerHTML = shown
        .map(
        (i) => `
        <div class="ingredient-card">
        <div class="ingredient-num">#${i.num}</div>
        <div class="ingredient-name">${i.name}</div>
        <span class="ingredient-tag">${i.cat}</span>
        </div>
    `,
        )
        .join("");

    countEl.textContent = filtered.length;
    loadWrap.style.display = filtered.length > visibleCount ? "block" : "none";
    }

    function filterCat(cat, el) {
    currentCat = cat;
    visibleCount = 48;
    // update category cards
    document
        .querySelectorAll(".cat-card")
        .forEach((c) => c.classList.remove("active"));
    if (el) el.classList.add("active");
    // update filter tags
    document.querySelectorAll(".filter-tag").forEach((t) => {
        t.classList.toggle(
        "active",
        t.textContent.trim() === (cat === "all" ? "All" : cat) ||
            (cat === "Oils" && t.textContent.includes("Oils")) ||
            (cat === "Emulsifiers" && t.textContent.includes("Emulsifiers")) ||
            (cat === "all" && t.textContent === "All"),
        );
    });
    renderGrid();
    document
        .getElementById("catalogue")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function setTag(cat, el) {
    currentCat = cat;
    visibleCount = 48;
    document
        .querySelectorAll(".filter-tag")
        .forEach((t) => t.classList.remove("active"));
    el.classList.add("active");
    document.querySelectorAll(".cat-card").forEach((c) => {
        c.classList.toggle("active", c.dataset.cat === cat);
    });
    renderGrid();
    }

    function handleSearch() {
    currentSearch = document.getElementById("searchInput").value;
    visibleCount = 48;
    renderGrid();
    }

    function loadMore() {
    visibleCount += 48;
    renderGrid();
    }

    function submitForm() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 4000);
    }

    // Scroll fade-in
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
        if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
        }
        });
    },
    { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Init
    renderGrid();
