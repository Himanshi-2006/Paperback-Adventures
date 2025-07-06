/* ============================================================
   Paperback Adventures 
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 100‑BOOK CATALOGUE -------------------------------- */
  const books = [
    /* --- Fantasy / YA --- */
    {t:"Harry Potter and the Sorcerer's Stone", p:15.99, img:"https://m.media-amazon.com/images/I/811t1pfIZXL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Percy Jackson: The Lightning Thief",     p:12.99, img:"https://m.media-amazon.com/images/I/91RQ5d-eIqL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Hobbit",                             p:11.49, img:"https://m.media-amazon.com/images/I/91b0C2YNSrL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Lord of the Rings",                  p:18.99, img:"https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Chronicles of Narnia",               p:16.99, img:"https://m.media-amazon.com/images/I/81FnKudWJFL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Eragon",                                 p:10.49, img:"https://m.media-amazon.com/images/I/81FaLzli3NL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Shadow and Bone",                        p:9.99,  img:"https://m.media-amazon.com/images/I/81iyF2ZvK5L._AC_UF1000,1000_QL80_.jpg"},
    {t:"A Court of Thorns and Roses",            p:13.49, img:"https://m.media-amazon.com/images/I/81eiUM2LeVL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Name of the Wind",                   p:14.89, img:"https://m.media-amazon.com/images/I/81Ha5bJKtuL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Mistborn: The Final Empire",             p:12.59, img:"https://m.media-amazon.com/images/I/81r8v7ZJQSL._AC_UF1000,1000_QL80_.jpg"},

    /* --- Classics --- */
    {t:"Pride and Prejudice",                    p:7.99,  img:"https://m.media-amazon.com/images/I/71Q1Iu4suSL._AC_UF1000,1000_QL80_.jpg"},
    {t:"To Kill a Mockingbird",                  p:9.49,  img:"https://m.media-amazon.com/images/I/81OdwZG4zLL._AC_UF1000,1000_QL80_.jpg"},
    {t:"1984",                                   p:8.99,  img:"https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Great Gatsby",                       p:8.49,  img:"https://m.media-amazon.com/images/I/81af+MCATTL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Moby‑Dick",                              p:10.29, img:"https://m.media-amazon.com/images/I/81Ox45j9QgL._AC_UF1000,1000_QL80_.jpg"},
    {t:"War and Peace",                          p:17.49, img:"https://m.media-amazon.com/images/I/81dV5ttmHJL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Crime and Punishment",                   p:11.59, img:"https://m.media-amazon.com/images/I/71CiXkuZO4L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Little Women",                           p:7.89,  img:"https://m.media-amazon.com/images/I/71wZVtAZuWL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Jane Eyre",                              p:9.19,  img:"https://m.media-amazon.com/images/I/81BlB2R29fL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Wuthering Heights",                      p:8.29,  img:"https://m.media-amazon.com/images/I/81DwyLDJ8oL._AC_UF1000,1000_QL80_.jpg"},

    /* --- Science Fiction --- */
    {t:"Dune",                                   p:13.99, img:"https://m.media-amazon.com/images/I/91pR9wKJ3zL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Foundation",                             p:9.29,  img:"https://m.media-amazon.com/images/I/81a+1wHzX5L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Neuromancer",                            p:8.59,  img:"https://m.media-amazon.com/images/I/81vpsIs58WL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Ender's Game",                           p:7.99,  img:"https://m.media-amazon.com/images/I/81B7jvBvTPL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Snow Crash",                             p:8.79,  img:"https://m.media-amazon.com/images/I/81G+N4-EEkL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Martian",                            p:10.99, img:"https://m.media-amazon.com/images/I/919iuN3KMYL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Ready Player One",                       p:9.19,  img:"https://m.media-amazon.com/images/I/81MZ2K0ZUzL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Hyperion",                               p:11.49, img:"https://m.media-amazon.com/images/I/91cUqJAzsRL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Left Hand of Darkness",              p:8.49,  img:"https://m.media-amazon.com/images/I/81KZYGbgTaL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Three‑Body Problem",                 p:12.19, img:"https://m.media-amazon.com/images/I/81Ddmw9a8sL._AC_UF1000,1000_QL80_.jpg"},

    /* --- Thrillers / Mystery --- */
    {t:"The Da Vinci Code",                      p:9.29,  img:"https://m.media-amazon.com/images/I/81NG9iBk4QL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Gone Girl",                              p:8.99,  img:"https://m.media-amazon.com/images/I/81FrCS69vSL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Girl with the Dragon Tattoo",        p:9.59,  img:"https://m.media-amazon.com/images/I/91x5wVMpzXL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Big Little Lies",                        p:8.49,  img:"https://m.media-amazon.com/images/I/81yPmIbb39L._AC_UF1000,1000_QL80_.jpg"},
    {t:"And Then There Were None",               p:7.79,  img:"https://m.media-amazon.com/images/I/81HKIcaK6+L._AC_UF1000,1000_QL80_.jpg"},
    {t:"In the Woods",                           p:8.49,  img:"https://m.media-amazon.com/images/I/818xEHmIbYL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Silent Patient",                     p:9.89,  img:"https://m.media-amazon.com/images/I/81RoYwPValL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Woman in the Window",                p:8.79,  img:"https://m.media-amazon.com/images/I/91EvVM01P9L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Sherlock Holmes: Complete Novels",       p:10.99, img:"https://m.media-amazon.com/images/I/91vkl8L2TpL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Hound of the Baskervilles",          p:6.99,  img:"https://m.media-amazon.com/images/I/81VLxKJXhaL._AC_UF1000,1000_QL80_.jpg"},

    /* --- Non‑Fiction / Memoir --- */
    {t:"Sapiens: A Brief History of Humankind",  p:12.99, img:"https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Educated",                               p:9.29,  img:"https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Becoming",                               p:10.99, img:"https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Into the Wild",                          p:8.49,  img:"https://m.media-amazon.com/images/I/81dDwmRThLL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Diary of a Young Girl",              p:7.49,  img:"https://m.media-amazon.com/images/I/81xrMcZzYCL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Immortal Life of Henrietta Lacks",   p:9.89,  img:"https://m.media-amazon.com/images/I/81sHW6cJwQL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Wright Brothers",                    p:8.79,  img:"https://m.media-amazon.com/images/I/91TAUmnIJwL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Unbroken",                               p:9.99,  img:"https://m.media-amazon.com/images/I/81RvTTMbl8L._AC_UF1000,1000_QL80_.jpg"},
    {t:"When Breath Becomes Air",                p:8.59,  img:"https://m.media-amazon.com/images/I/71m-MxdJ2WL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Glass Castle",                       p:7.99,  img:"https://m.media-amazon.com/images/I/81vnFO0l01L._AC_UF1000,1000_QL80_.jpg"},

    /* --- Self‑Help / Business --- */
    {t:"Atomic Habits",                          p:11.99, img:"https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The 7 Habits of Highly Effective People",p:10.49, img:"https://m.media-amazon.com/images/I/81SGb5l+7SL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Think and Grow Rich",                    p:7.49,  img:"https://m.media-amazon.com/images/I/71UypkUjStL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Rich Dad Poor Dad",                      p:8.49,  img:"https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"},
    {t:"How to Win Friends & Influence People",  p:7.79,  img:"https://m.media-amazon.com/images/I/817K9KcPfUL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Subtle Art of Not Giving a F*ck",    p:9.29,  img:"https://m.media-amazon.com/images/I/71QKQ9mwV7L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Deep Work",                              p:9.99,  img:"https://m.media-amazon.com/images/I/818bFAhG1TL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Start with Why",                         p:8.99,  img:"https://m.media-amazon.com/images/I/71U8j0O+bcL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Zero to One",                            p:9.89,  img:"https://m.media-amazon.com/images/I/71m-MDLTIIL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Lean Startup",                       p:10.59, img:"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg"},

    /* --- Children / Middle Grade --- */
    {t:"Diary of a Wimpy Kid",                   p:5.99,  img:"https://m.media-amazon.com/images/I/91ttL3y0VqL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Charlotte's Web",                        p:6.99,  img:"https://m.media-amazon.com/images/I/81W1E+B9+NL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Matilda",                                p:7.29,  img:"https://m.media-amazon.com/images/I/81DKxF1oZoL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Jungle Book",                        p:9.99,  img:"https://m.media-amazon.com/images/I/51U3tpFHjDL._SY445_SX342_.jpg"},
    {t:"The Cat in the Hat",                     p:4.99,  img:"https://m.media-amazon.com/images/I/71t4GuxLC0L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Where the Wild Things Are",              p:6.49,  img:"https://m.media-amazon.com/images/I/81jM5AlKLgL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Goodnight Moon",                         p:4.89,  img:"https://m.media-amazon.com/images/I/81loPl2U5mL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Very Hungry Caterpillar",            p:4.79,  img:"https://m.media-amazon.com/images/I/91eS2ijV4sL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Wonder",                                 p:6.99,  img:"https://m.media-amazon.com/images/I/81WojUxbbFL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Harry Potter and the Chamber of Secrets",p:15.99, img:"https://m.media-amazon.com/images/I/91OINeHnJGL._AC_UF1000,1000_QL80_.jpg"},

    /* --- Poetry / Drama / Misc --- */
    {t:"Milk and Honey",                         p:6.79,  img:"https://m.media-amazon.com/images/I/71U8tW+TStL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Leaves of Grass",                        p:7.59,  img:"https://m.media-amazon.com/images/I/81YxtN0y2+L._AC_UF1000,1000_QL80_.jpg"},
    {t:"Hamlet",                                 p:5.49,  img:"https://m.media-amazon.com/images/I/71h7A2F-N-L._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Odyssey",                            p:8.49,  img:"https://m.media-amazon.com/images/I/81ybBU1wbvL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Divine Comedy",                      p:9.99,  img:"https://m.media-amazon.com/images/I/91bZYu2xAqL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Dracula",                                p:7.29,  img:"https://m.media-amazon.com/images/I/81Yb-Yv8ZYL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Frankenstein",                           p:6.79,  img:"https://m.media-amazon.com/images/I/81mN2eGcwSL._AC_UF1000,1000_QL80_.jpg"},
    {t:"The Alchemist",                          p:6.99,  img:"https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg"},
    {t:"A Brief History of Time",                p:8.99,  img:"https://m.media-amazon.com/images/I/81cFRI4NnFL._AC_UF1000,1000_QL80_.jpg"},
    {t:"Kitchen Confidential",                   p:9.89,  img:"https://m.media-amazon.com/images/I/81O5kUPXprL._AC_UF1000,1000_QL80_.jpg"}
  ]; // 100 total

  /* ---------- ELEMENT REFERENCES ------------------------------ */
  const bookContainer = document.getElementById("bookContainer");
  const prevBtn       = document.getElementById("prevBtn");
  const nextBtn       = document.getElementById("nextBtn");
  const pageInfo      = document.getElementById("pageInfo");
  const searchInput   = document.getElementById("searchInput");
  const searchButton  = document.getElementById("searchButton");
  const cartCountSpan = document.getElementById("cartCount");
  const cartIcon      = document.getElementById("cartIcon");

  /* ---------- PAGINATION CONFIG ------------------------------- */
  const booksPerPage = 12;
  let currentPage    = 1;
  let filteredBooks  = books;                       // changes on search

  /* ---------- CART STATE -------------------------------------- */
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updateCartDisplay = () => {
    const total = cartItems.reduce((sum,i)=>sum+i.quantity,0);
    cartCountSpan.textContent = total;
  };
  updateCartDisplay();

  /* ---------- RENDER ONE PAGE -------------------------------- */
  function renderPage() {
    /* clear grid */
    bookContainer.innerHTML = "";
    /* slice books to show */
    const start = (currentPage - 1) * booksPerPage;
    const pageBooks = filteredBooks.slice(start, start + booksPerPage);

    /* build cards */
    pageBooks.forEach(b => {
      const box   = document.createElement("div"); box.className="box"; box.dataset.title=b.t; box.dataset.price=b.p;
      const h2    = document.createElement("h2");  h2.textContent = b.t.length>30 ? b.t.slice(0,27)+"…" : b.t;
      const img   = document.createElement("img"); img.src=b.img; img.alt=b.t; img.className="book-img";
      const btn   = document.createElement("button"); btn.textContent="Add to Cart"; btn.className="addToCartBtn";
      box.append(h2,img,btn); bookContainer.appendChild(box);
    });

    /* update pagination controls */
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage) || 1;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

  /* ---------- PAGE NAVIGATION -------------------------------- */
  prevBtn.addEventListener("click", () => {currentPage--; renderPage();});
  nextBtn.addEventListener("click", () => {currentPage++; renderPage();});

  /* ---------- SEARCH ----------------------------------------- */
  function runSearch(){
    const term = searchInput.value.trim().toLowerCase();
    filteredBooks = books.filter(b=>b.t.toLowerCase().includes(term));
    currentPage = 1;                                 // reset to first page
    renderPage();
  }
  searchButton.addEventListener("click", runSearch);
  searchInput.addEventListener("keyup", e => {if(e.key==="Enter") runSearch();});

  /* ---------- DELEGATED CART BUTTON HANDLER ------------------ */
  bookContainer.addEventListener("click", e=>{
    if(!e.target.classList.contains("addToCartBtn")) return;
    const box   = e.target.closest(".box");
    const title = box.dataset.title;
    const price = parseFloat(box.dataset.price);
    const img   = box.querySelector("img").src;

    const existing = cartItems.find(i=>i.title===title);
    existing ? existing.quantity++ : cartItems.push({title,price,image:img,quantity:1});
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartDisplay();

    cartIcon.classList.add("bounce");
    setTimeout(()=>cartIcon.classList.remove("bounce"),500);
    alert(`Added "${title}" to cart!`);
  });

  /* ---------- MISC (hamburger, back‑to‑top, logout) ---------- */
  document.getElementById("menu-toggle").addEventListener("click", ()=>{
    document.getElementById("menu-items").classList.toggle("active");
  });
  document.getElementById("backToTop").addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  });
  document.getElementById("logoutBtn").addEventListener("click",()=>{
    localStorage.removeItem("loggedInUser");
    alert("Logged out!");
    window.location.href="LoginPage.html";
  });

  // ========== Account Dropdown (Show only name) ==========
  const greetingSpan = document.getElementById("userGreeting");
  const signInLink = document.getElementById("signInLink");
  let username = "Guest";

  const userData = localStorage.getItem("loggedInUser");

  try {
    const user = JSON.parse(userData);
    if (user && typeof user === "object" && user.name) {
      username = user.name;
    } else if (typeof userData === "string") {
      username = userData; // fallback if it's just a name
    }
  } catch (e) {
    if (typeof userData === "string") {
      username = userData;
    }
  }

  greetingSpan.textContent = `Hello, ${username}`;
  if (signInLink) {
    signInLink.textContent = username === "Guest" ? "Sign In" : "Your Account";
    signInLink.href = username === "Guest" ? "LoginPage.html" : "AccountPage.html";
  }

  /* ---------- INITIAL RENDER --------------------------------- */
  renderPage();
});
