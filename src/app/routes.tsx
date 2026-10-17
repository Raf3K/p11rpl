import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BarChart3,
  Bold,
  Bookmark,
  Box,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  CircleGauge,
  CreditCard,
  DollarSign,
  Download,
  Edit3,
  Flame,
  Cpu,
  Fan,
  Gauge,
  HardDrive,
  Image,
  Italic,
  Link2,
  List,
  Menu,
  MessageCircle,
  Moon,
  MapPin,
  Megaphone,
  MemoryStick,
  MoreVertical,
  Monitor,
  PackageCheck,
  Package,
  Plus,
  Receipt,
  Search,
  Share2,
  ShieldCheck,
  Save,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Store,
  Sun,
  Send,
  TrendingUp,
  Trash2,
  Truck,
  Upload,
  User,
  Users,
  Wallet,
  Video,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import {
  Link,
  NavLink,
  Outlet,
  createBrowserRouter,
  useNavigate,
} from "react-router";

const heroImage =
  "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxnYW1pbmclMjBjb21wdXRlciUyMFBDJTIwdG93ZXIlMjBzZXR1cHxlbnwxfHx8fDE3OTA5MDQxNTB8MA&ixlib=rb-4.1.0&q=85&w=1600";
const setupImage =
  "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxnYW1pbmclMjBjb21wdXRlciUyMFBDJTIwdG93ZXIlMjBzZXR1cHxlbnwxfHx8fDE3OTA5MDQxNTB8MA&ixlib=rb-4.1.0&q=85&w=1400";
const rigImage =
  "https://images.unsplash.com/photo-1660855551740-4474188debdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxnYW1pbmclMjBjb21wdXRlciUyMFBDJTIwdG93ZXIlMjBzZXR1cHxlbnwxfHx8fDE3OTA5MDQxNTB8MA&ixlib=rb-4.1.0&q=85&w=1400";
const hardwareImages = {
  cpu: "https://images.unsplash.com/photo-1716772911908-79781d033686?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMENQVSUyMHByb2Nlc3NvciUyMGNoaXAlMjBwcm9kdWN0JTIwYmxhY2slMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc5MTI2MjQzMHww&ixlib=rb-4.1.0&q=85&w=1200",
  gpu: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwUkFNJTIwU1NEJTIwY29vbGluZyUyMGhhcmR3YXJlJTIwZGFyayUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMjYyNDMxfDA&ixlib=rb-4.1.0&q=85&w=1200",
  board: "https://images.unsplash.com/photo-1576400883215-7083980b6193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwUkFNJTIwU1NEJTIwY29vbGluZyUyMGhhcmR3YXJlJTIwZGFyayUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMjYyNDMxfDA&ixlib=rb-4.1.0&q=85&w=1200",
  memory: "https://images.unsplash.com/photo-1692049065982-fc40fa2d4403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwUkFNJTIwU1NEJTIwY29vbGluZyUyMGhhcmR3YXJlJTIwZGFyayUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMjYyNDMxfDA&ixlib=rb-4.1.0&q=85&w=1200",
  cooling: "https://images.unsplash.com/photo-1651864756980-7a1d856d72fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwUkFNJTIwU1NEJTIwY29vbGluZyUyMGhhcmR3YXJlJTIwZGFyayUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMjYyNDMxfDA&ixlib=rb-4.1.0&q=85&w=1200",
  storage: "https://images.unsplash.com/photo-1495627009230-9e30e647c7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxjb21wdXRlciUyMG1vdGhlcmJvYXJkJTIwUkFNJTIwU1NEJTIwY29vbGluZyUyMGhhcmR3YXJlJTIwZGFyayUyMHByb2R1Y3R8ZW58MXx8fHwxNzkxMjYyNDMxfDA&ixlib=rb-4.1.0&q=85&w=1200",
  monitor: "https://images.unsplash.com/photo-1789922129938-f02af2785d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBtb25pdG9yJTIwY29tcHV0ZXIlMjBoYXJkd2FyZSUyMHByb2R1Y3QlMjBkYXJrJTIwc3R1ZGlvfGVufDF8fHx8MTc5MTI2MjQzMXww&ixlib=rb-4.1.0&q=85&w=1200",
};

type CartItem = {
  id: string;
  name: string;
  spec: string;
  price: number;
  image: string;
  quantity: number;
};

const defaultCart: CartItem[] = [
  { id: "rtx-4080-super", name: "GeForce RTX 4080 Super", spec: "16GB GDDR6X", price: 999, image: hardwareImages.gpu, quantity: 1 },
  { id: "ryzen-9-9950x", name: "Ryzen 9 9950X", spec: "16-Core / AM5", price: 649, image: hardwareImages.cpu, quantity: 1 },
];

function readSavedCart(): CartItem[] {
  try {
    const saved = JSON.parse(localStorage.getItem("simplifyCart") || "[]") as CartItem[] | number[];
    if (saved.length > 0 && typeof saved[0] === "number") {
      return defaultCart.map((item, index) => ({ ...item, quantity: Number(saved[index] || 0) })).filter((item) => item.quantity > 0);
    }
    return (saved as CartItem[]).filter((item) => item && item.quantity > 0);
  } catch {
    return [];
  }
}

function addCartItem(item: Omit<CartItem, "quantity">) {
  if (sessionStorage.getItem("simplifyRole") !== "customer") {
    window.dispatchEvent(new Event("simplify-cart-login"));
    return false;
  }
  window.dispatchEvent(new CustomEvent("simplify-cart-add", { detail: item }));
  return true;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "light" | "dark" | "outline" | "ghost";
};

function Button({ variant = "dark", className = "", ...props }: ButtonProps) {
  return <button className={`btn btn-${variant} ${className}`} {...props} />;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState(() => sessionStorage.getItem("simplifyRole"));
  const [theme, setTheme] = useState<"light" | "dark">(() => (localStorage.getItem("simplifyTheme") === "dark" ? "dark" : "light"));
  const [cart, setCart] = useState<CartItem[]>(() => sessionStorage.getItem("simplifyRole") === "customer" ? readSavedCart() : []);
  const [cartToast, setCartToast] = useState(false);
  const isCustomer = role === "customer";
  const itemCount = isCustomer ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;
  useEffect(() => {
    const syncAuth = () => {
      const nextRole = sessionStorage.getItem("simplifyRole");
      setRole(nextRole);
      setCart(nextRole === "customer" ? readSavedCart() : []);
    };
    window.addEventListener("simplify-auth", syncAuth);
    return () => window.removeEventListener("simplify-auth", syncAuth);
  }, []);
  useEffect(() => {
    const addItem = (event: Event) => {
      const item = (event as CustomEvent<Omit<CartItem, "quantity">>).detail;
      setCart((current) => {
        const existing = current.find((entry) => entry.id === item.id);
        return existing
          ? current.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry)
          : [...current, { ...item, quantity: 1 }];
      });
      setCartToast(true);
      window.setTimeout(() => setCartToast(false), 2600);
    };
    const requestLogin = () => setCartOpen(true);
    window.addEventListener("simplify-cart-add", addItem);
    window.addEventListener("simplify-cart-login", requestLogin);
    return () => {
      window.removeEventListener("simplify-cart-add", addItem);
      window.removeEventListener("simplify-cart-login", requestLogin);
    };
  }, []);
  useEffect(() => {
    if (isCustomer) localStorage.setItem("simplifyCart", JSON.stringify(cart));
  }, [cart, isCustomer]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("simplifyTheme", theme);
  }, [theme]);
  const updateQuantity = (id: string, change: number) => {
    setCart((current) => current.flatMap((item) => {
      if (item.id !== id) return [item];
      const quantity = item.quantity + change;
      return quantity > 0 ? [{ ...item, quantity }] : [];
    }));
  };
  const removeItem = (id: string) => setCart((current) => current.filter((item) => item.id !== id));
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.0825;
  const total = subtotal + taxes;
  const results = [
    { name: "GeForce RTX 4080 Super", type: "GPU", meta: "In Stock · 14 units", price: "$999", image: hardwareImages.gpu, to: "/product/rtx-4080" },
    { name: "Ryzen 9 9950X", type: "CPU", meta: "In Stock · 8 units", price: "$649", image: hardwareImages.cpu, to: "/shop" },
    { name: "Apex X7", type: "Prebuilt PC", meta: "Out of Stock", price: "$2,899", image: rigImage, to: "/prebuilt/apex-x7" },
  ].filter((item) => `${item.name} ${item.type}`.toLowerCase().includes(search.toLowerCase()));
  const accountName = sessionStorage.getItem("simplifyName") || "Alex Morgan";
  return (
    <>
      <header className="site-header">
        <Link to="/" className="brand brand-logo" aria-label="simplify.pc home">
          <span className="brand-mark"><span /></span>
          <span className="brand-name">simplify.pc</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Catalog</NavLink>
          <NavLink to="/builder">B.Y.O</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>
        <div className="global-search">
          <Search size={17} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search parts, GPUs, or prebuilts..." aria-label="Search products" />
          {search && <div className="search-results"><span className="mono">QUICK RESULTS</span>{results.length ? results.map((item) => <Link to={item.to} key={item.name} onClick={() => setSearch("")}><img src={item.image} alt="" /><div><strong>{item.name}</strong><small><span className="search-category">{item.type}</span><span className={item.meta.startsWith("Out") ? "stock-out" : "stock-live"}>{item.meta}</span></small></div><b>{item.price}</b></Link>) : <p>No matches found. Try another search.</p>}<Link className="view-all-results" to="/shop" onClick={() => setSearch("")}>View all results <ArrowRight size={14} /></Link></div>}
        </div>
        <div className="header-actions">
          <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}><Sun size={15} /><span><i /></span><Moon size={15} /></button>
          <button className="header-cart" aria-label={`Shopping cart with ${itemCount} items`} onClick={() => setCartOpen(true)}><ShoppingBag size={18} /><span>Cart</span><b>{itemCount}</b></button>
          {role ? <div className="account-control"><button className="account-avatar" onClick={() => setAccountOpen(!accountOpen)} aria-label="Open account menu">{accountName.split(" ").map((part) => part[0]).join("").slice(0, 2)}<ChevronDown size={13} /></button>{accountOpen && <div className="account-menu"><strong>{accountName}</strong><span>{role === "customer" ? "Customer account" : role === "super-admin" ? "Super Administrator" : "Administrator"}</span><Link to={role === "customer" ? "/account" : "/admin"} onClick={() => setAccountOpen(false)}><User />Profile</Link>{role === "customer" && <Link to="/account" onClick={() => setAccountOpen(false)}><Package />Orders</Link>}<Link to={role === "customer" ? "/account" : "/admin"} onClick={() => setAccountOpen(false)}><SlidersHorizontal />Settings</Link><button onClick={() => { sessionStorage.clear(); window.dispatchEvent(new Event("simplify-auth")); setAccountOpen(false); }}>Log out</button></div>}</div> : <Link to="/login" className="login-pill">Log In / Register</Link>}
          <button className="icon-btn mobile-menu" aria-label="Open menu" onClick={() => setOpen(true)}><Menu size={21} /></button>
        </div>
      </header>
      {open && (
        <div className="mobile-drawer">
          <div className="drawer-top"><span className="brand brand-logo"><span className="brand-mark"><span /></span><span className="brand-name">simplify.pc</span></span><button className="icon-btn" onClick={() => setOpen(false)}><X /></button></div>
          {[
            ["/", "Home"],
            ["/shop", "Catalog"],
            ["/prebuilt", "Prebuilt PCs"],
            ["/builder", "B.Y.O (Build Your Own)"],
            ["/services", "Services"],
            ["/community", "Community"],
            ["/diagnose", "Diagnose"],
            ["/expert", "Expert Advice"],
          ].map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}<ArrowRight /></NavLink>)}
          <div className="mobile-drawer-tools"><button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>{theme === "light" ? <Moon /> : <Sun />}Switch to {theme === "light" ? "dark" : "light"} theme</button><Link to={role === "customer" ? "/account" : role ? "/admin" : "/login"} onClick={() => setOpen(false)}><User />{role ? "My account" : "Log In / Register"}</Link></div>
        </div>
      )}
      {cartOpen && <div className="cart-layer" onMouseDown={() => setCartOpen(false)}><aside className="cart-drawer" onMouseDown={(event) => event.stopPropagation()}>
        <div className="cart-head"><div><span className="mono">YOUR CART</span><h2>{itemCount > 0 ? `${itemCount} ITEMS` : "EMPTY CART"}</h2></div><button onClick={() => setCartOpen(false)}><X /></button></div>
        {isCustomer && cart.length > 0 ? <><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt={item.name} /><div><strong>{item.name}</strong><span>{item.spec}</span><div className="quantity"><button onClick={() => updateQuantity(item.id, -1)} aria-label={`Reduce ${item.name} quantity`}>−</button><b>{item.quantity}</b><button onClick={() => updateQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div></div><div className="cart-item-end"><b>${(item.price * item.quantity).toLocaleString()}</b><button onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}><Trash2 />Remove</button></div></div>)}</div>
        <div className="cart-foot"><div><span>Subtotal</span><strong>${subtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></div><div><span>Estimated taxes</span><b>${taxes.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</b></div><div className="cart-total"><span>Total</span><strong>${total.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</strong></div><Link to="/checkout" className="btn btn-dark" onClick={() => setCartOpen(false)}>Proceed to checkout <ArrowRight size={17} /></Link><button className="continue-shopping" onClick={() => setCartOpen(false)}>Continue shopping</button></div></> : <div className="empty-cart"><span><ShoppingBag /></span><h3>Your cart is empty</h3><p>{isCustomer ? "Browse components and systems to add your first item." : "Please log in or create an account to view your saved cart items."}</p>{isCustomer ? <Link to="/shop" className="btn btn-dark" onClick={() => setCartOpen(false)}>Shop components <ArrowRight /></Link> : <Link to="/login" className="btn btn-dark" onClick={() => setCartOpen(false)}>Log in <ArrowRight /></Link>}</div>}
      </aside></div>}
      {cartToast && <div className="cart-toast"><span><Check /></span><div><strong>Item added to cart</strong><button onClick={() => { setCartOpen(true); setCartToast(false); }}>View Cart</button></div></div>}
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div><span className="brand brand-logo"><span className="brand-mark"><span /></span><span className="brand-name">simplify.pc</span></span><p>Engineered for what&apos;s next.</p></div>
      <div className="footer-links"><Link to="/shop">Shop</Link><Link to="/builder">B.Y.O</Link><Link to="/services">Support</Link><span>© 2026 simplify.pc</span></div>
    </footer>
  );
}

function Layout() {
  return <><Header /><main><Outlet /></main><Footer /><SupportWidget /></>;
}

function SupportWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const send = () => {
    if (!message.trim()) return;
    setMessages([...messages, message.trim()]);
    setMessage("");
  };
  return (
    <div className={`support-widget ${open ? "open" : ""}`}>
      {open && <div className="support-popover">
        <div className="support-top"><div><span className="status-dot" /><strong>PC Expert</strong><small>Online · typically replies instantly</small></div><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button></div>
        <div className="support-messages">
          <div className="expert-message">Hi, I&apos;m Alex. Need help choosing parts or checking compatibility?</div>
          {messages.map((item, i) => <div className="user-message" key={`${item}-${i}`}>{item}</div>)}
        </div>
        <div className="support-compose"><input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask a PC expert..." aria-label="Message a PC expert" /><button onClick={send} aria-label="Send message"><Send size={17} /></button></div>
        <Link to="/expert" onClick={() => setOpen(false)}>Open consultation hub <ArrowRight size={14} /></Link>
      </div>}
      <button className="support-trigger" onClick={() => setOpen(!open)} aria-label="Chat with a PC expert">{open ? <X /> : <MessageCircle />}<span>Chat with a PC expert</span></button>
    </div>
  );
}

const categories = [
  { name: "Processors", meta: "46 products", image: hardwareImages.cpu },
  { name: "Graphics Cards", meta: "32 products", image: hardwareImages.gpu },
  { name: "Motherboards", meta: "38 products", image: hardwareImages.board },
  { name: "Memory", meta: "54 products", image: hardwareImages.memory },
  { name: "Cooling", meta: "29 products", image: hardwareImages.cooling },
  { name: "Cases", meta: "31 products", image: rigImage },
  { name: "Power Supplies", meta: "27 products", image: hardwareImages.storage },
  { name: "Monitors", meta: "41 products", image: hardwareImages.monitor },
];

function Home() {
  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Close-up of a high-performance custom PC" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow light"><span /> BUILT BEYOND STANDARD</span>
          <h1>POWER,<br />PERFECTED.</h1>
          <p>Precision-selected components. Expert-built systems.<br className="desktop-only" /> Performance without compromise.</p>
          <div className="hero-actions">
            <Link to="/builder" className="btn btn-light">Start your B.Y.O <ArrowRight size={18} /></Link>
            <Link to="/shop" className="btn btn-glass">Shop parts</Link>
          </div>
        </div>
        <div className="hero-index mono">01 / PERFORMANCE SYSTEMS</div>
      </section>

      <section className="section categories">
        <SectionHeading kicker="Shop by category" title={<>THE PARTS THAT<br />MAKE THE MACHINE.</>} action="View all components" href="/shop" />
        <div className="category-grid">
          {categories.map(({ name, meta, image }, i) => (
            <Link to="/shop" className="category-card" key={name}>
              <span className="category-number mono">0{i + 1}</span>
              <img src={image} alt={`${name} product category`} />
              <div><strong>{name}</strong><span>{meta}</span></div>
              <ArrowRight className="category-arrow" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="prebuilt-section">
        <div className="section">
          <SectionHeading kicker="Prebuilt systems" title={<>READY WHEN<br />YOU ARE.</>} />
          <div className="prebuilt-grid">
            <article className="prebuilt-card featured">
              <img src={setupImage} alt="A workstation setup with a custom PC" />
              <div className="prebuilt-shade" />
              <span className="tag">FLAGSHIP</span>
              <div className="prebuilt-info">
                <p className="mono">RTX 5090 / RYZEN 9 / 64GB</p>
                <h3>THE APEX 09</h3>
                <div><span>From $4,299</span><Link to="/shop">Explore system <ArrowRight size={17} /></Link></div>
              </div>
            </article>
            <article className="prebuilt-card compact">
              <img src={rigImage} alt="A premium dark PC tower" />
              <div className="prebuilt-shade" />
              <span className="tag">CREATOR</span>
              <div className="prebuilt-info"><p className="mono">RTX 4080 SUPER / i9 / 32GB</p><h3>THE STUDIO S2</h3><span>From $2,899</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="service-strip">
        <div className="service-intro"><span className="eyebrow light"><span /> CORECARE SERVICES</span><h2>MORE THAN<br />HARDWARE.</h2></div>
        <Link to="/services" className="service-link"><Wrench /><div><span className="mono">01</span><h3>Book maintenance</h3><p>Keep your system running at peak performance.</p></div><ArrowRight /></Link>
        <Link to="/diagnose" className="service-link"><CircleGauge /><div><span className="mono">02</span><h3>Diagnose my PC</h3><p>Find the likely fault in under two minutes.</p></div><ArrowRight /></Link>
      </section>
    </>
  );
}

function SectionHeading({ kicker, title, action, href = "#" }: { kicker: string; title: React.ReactNode; action?: string; href?: string }) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow"><span /> {kicker}</span><h2>{title}</h2></div>
      {action && <Link to={href}>{action} <ArrowRight size={17} /></Link>}
    </div>
  );
}

const products = [
  { id: "ryzen-9-9950x", brand: "AMD", name: "Ryzen 9 9950X", spec: "16-Core / 32-Thread / AM5", price: 649, type: "CPU", image: hardwareImages.cpu },
  { id: "rtx-5090", brand: "NVIDIA", name: "GeForce RTX 5090", spec: "32GB GDDR7 / PCIe 5.0", price: 1999, type: "GPU", image: hardwareImages.gpu },
  { id: "rog-x870e", brand: "ASUS", name: "ROG Crosshair X870E", spec: "AM5 / DDR5 / WiFi 7", price: 699, type: "Motherboard", image: hardwareImages.board },
  { id: "trident-z5", brand: "G.SKILL", name: "Trident Z5 Neo 64GB", spec: "DDR5-6000 / CL30", price: 219, type: "Memory", image: hardwareImages.memory },
  { id: "kraken-elite", brand: "NZXT", name: "Kraken Elite 360", spec: "360mm AIO / AM5 / LGA1851", price: 279, type: "Cooling", image: hardwareImages.cooling },
  { id: "990-pro", brand: "SAMSUNG", name: "990 Pro 4TB", spec: "NVMe / 7,450 MB/s", price: 349, type: "Storage", image: hardwareImages.storage },
];

function Shop() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const filtered = category === "All" ? products : products.filter((p) => p.type === category);
  return (
    <div className="page-shell">
      <div className="page-head"><span className="eyebrow"><span /> COMPONENTS</span><h1>BUILD WITHOUT<br />LIMITS.</h1><p>Curated hardware. Verified compatibility. No guesswork.</p></div>
      <div className="catalog-toolbar">
        <div className="catalog-tabs">{["All", "CPU", "GPU", "Motherboard", "Memory", "Cooling", "Storage"].map((item) => <button className={category === item ? "active" : ""} key={item} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <button className="sort-btn" onClick={() => setSort(sort === "Featured" ? "Price: Low to High" : "Featured")}><SlidersHorizontal size={16} /> {sort}</button>
      </div>
      <div className="catalog-layout">
        <aside className="filters">
          <div><strong>Brand</strong><ChevronDown size={16} /></div>
          {["AMD", "NVIDIA", "ASUS", "G.SKILL", "NZXT", "SAMSUNG"].map((brand, i) => <label key={brand}><input type="checkbox" defaultChecked={i < 2} /> <span>{brand}</span></label>)}
          <div><strong>Price range</strong><ChevronDown size={16} /></div>
          <div className="price-range"><span>$0</span><span>$2,500+</span></div>
          <input aria-label="Maximum price" type="range" min="0" max="2500" defaultValue="2000" />
          <div><strong>Compatibility</strong><ChevronDown size={16} /></div>
          <label><input type="checkbox" /> <span>Show build-compatible only</span></label>
        </aside>
        <div className="product-grid">
          {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: typeof products[number] }) {
  const [added, setAdded] = useState(false);
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-visual"><span className="tag dark">{product.type}</span><img src={product.image} alt={product.name} /></Link>
      <div className="product-copy">
        <span className="mono product-brand">{product.brand}</span>
        <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
        <p>{product.spec}</p>
        <div><strong>${product.price.toLocaleString()}</strong><Button aria-label={`Add ${product.name} to cart`} onClick={() => { if (addCartItem({ id: product.id, name: product.name, spec: product.spec, price: product.price, image: product.image })) setAdded(true); }}>{added ? <Check size={18} /> : <ShoppingBag size={17} />} {added ? "Add another" : "Add"}</Button></div>
      </div>
    </article>
  );
}

function ProductDetail() {
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const gpuImages = [
    "https://images.unsplash.com/photo-1555618254-84e2cf498b01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxOVklESUElMjBHZUZvcmNlJTIwUlRYJTIwZ3JhcGhpY3MlMjBjYXJkJTIwc3R1ZGlvJTIwYmxhY2slMjBHUFV8ZW58MXx8fHwxNzkxMjYyMjM4fDA&ixlib=rb-4.1.0&q=90&w=1600",
    "https://images.unsplash.com/photo-1555618565-9f2b0323a10d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxOVklESUElMjBHZUZvcmNlJTIwUlRYJTIwZ3JhcGhpY3MlMjBjYXJkJTIwc3R1ZGlvJTIwYmxhY2slMjBHUFV8ZW58MXx8fHwxNzkxMjYyMjM4fDA&ixlib=rb-4.1.0&q=90&w=1600",
    "https://images.unsplash.com/photo-1727176763565-1d983341bb95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxOVklESUElMjBHZUZvcmNlJTIwUlRYJTIwZ3JhcGhpY3MlMjBjYXJkJTIwc3R1ZGlvJTIwYmxhY2slMjBHUFV8ZW58MXx8fHwxNzkxMjYyMjM4fDA&ixlib=rb-4.1.0&q=90&w=1600",
  ];
  return (
    <div className="product-page-dark">
      <div className="product-page-inner">
        <div className="product-crumbs"><Link to="/shop">Components</Link><ChevronRight size={13} /><Link to="/shop">Graphics Cards</Link><ChevronRight size={13} /><span>RTX 4080 Super</span></div>
        <div className="product-showcase">
          <div className="product-gallery">
            <div className="product-main-image"><img src={gpuImages[activeImage]} alt="NVIDIA GeForce RTX 4080 graphics card" /><span className="image-label mono">GEFORCE RTX / FOUNDERS EDITION</span><span className="image-count mono">{String(activeImage + 1).padStart(2, "0")} / 03</span></div>
            <div className="product-thumbnails">{gpuImages.map((image, index) => <button className={activeImage === index ? "active" : ""} onClick={() => setActiveImage(index)} key={image}><img src={image} alt={`RTX 4080 product view ${index + 1}`} /><span>{String(index + 1).padStart(2, "0")}</span></button>)}</div>
          </div>
          <div className="product-info-dark">
            <span className="product-kicker mono">NVIDIA / GRAPHICS</span>
            <h1>GEFORCE RTX<br />4080 SUPER</h1>
            <div className="product-rating"><span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</span><b>4.9</b><a href="#reviews">128 verified reviews</a></div>
            <p>Supercharge your gaming and creative work with Ada Lovelace architecture, full ray tracing, and AI-accelerated performance.</p>
            <div className="key-specs">
              <div><span>Architecture</span><strong>ADA LOVELACE</strong></div>
              <div><span>Memory</span><strong>16GB GDDR6X</strong></div>
              <div><span>Boost clock</span><strong>2.55 GHZ</strong></div>
            </div>
            <div className="product-price-dark"><span className="mono">IN STOCK / SHIPS TODAY</span><strong>$999.00</strong><small>or 4 payments of $249.75</small></div>
            <div className="product-ctas"><Button onClick={() => { if (addCartItem({ id: "rtx-4080-super", name: "GeForce RTX 4080 Super", spec: "16GB GDDR6X / Founders Edition", price: 999, image: gpuImages[activeImage] })) setAdded(true); }}>{added ? <Check /> : <ShoppingBag />} {added ? "Add another" : "Add to cart"}</Button><Button variant="outline"><PlusIcon /> Add to build</Button></div>
            <div className="compatibility-dark"><span className="compat-check"><Check /></span><div><strong>Compatible with your current build</strong><span>Power, clearance, and PCIe requirements verified</span></div><ChevronRight /></div>
            <div className="product-trust"><span><ShieldCheck />3-year warranty</span><span><PackageCheck />Free insured shipping</span></div>
          </div>
        </div>
        <div className="product-tech-section"><div><span className="eyebrow light"><span /> TECHNICAL PROFILE</span><h2>BUILT FOR<br />THE EXTREME.</h2></div><div className="spec-table dark-specs">
          {[["CUDA Cores", "10,240"], ["Base / Boost Clock", "2.21 / 2.55 GHz"], ["Memory Interface", "256-bit"], ["Total Graphics Power", "320 W"], ["Recommended PSU", "750 W"], ["Display Outputs", "3× DP 1.4a / HDMI 2.1"]].map(([a, b]) => <div key={a}><span>{a}</span><strong className="mono">{b}</strong></div>)}
        </div></div>
      </div>
    </div>
  );
}

function PlusIcon() {
  return <span className="plus-icon" aria-hidden="true">+</span>;
}

const prebuiltSystems = [
  { id: "apex-x7", tier: "Ultra Gaming", name: "Apex X7", cpu: "Intel Core Ultra 7 265K", gpu: "GeForce RTX 5080 16GB", ram: "32GB DDR5-6400", storage: "2TB NVMe Gen 4", price: 2899, image: rigImage, mark: "4K / 144 FPS" },
  { id: "vector-r5", tier: "Entry Gaming", name: "Vector R5", cpu: "AMD Ryzen 5 9600X", gpu: "GeForce RTX 5060 Ti", ram: "16GB DDR5-6000", storage: "1TB NVMe Gen 4", price: 1299, image: heroImage, mark: "1440P / 120 FPS" },
  { id: "studio-pro", tier: "Workstation", name: "Studio Pro", cpu: "AMD Ryzen 9 9950X", gpu: "GeForce RTX 5090 32GB", ram: "64GB DDR5 ECC", storage: "4TB NVMe Gen 5", price: 4599, image: setupImage, mark: "8K EDIT READY" },
  { id: "form-office", tier: "Office", name: "Form Office S", cpu: "Intel Core Ultra 5 245", gpu: "Intel Arc Integrated", ram: "16GB DDR5-5600", storage: "1TB NVMe Gen 4", price: 899, image: rigImage, mark: "SILENT / COMPACT" },
  { id: "apex-r9", tier: "Ultra Gaming", name: "Apex R9", cpu: "AMD Ryzen 9 9950X3D", gpu: "GeForce RTX 5090 32GB", ram: "64GB DDR5-6000", storage: "4TB NVMe Gen 5", price: 4999, image: heroImage, mark: "4K / 240 FPS" },
  { id: "creator-s1", tier: "Workstation", name: "Creator S1", cpu: "Intel Core Ultra 9 285K", gpu: "GeForce RTX 5080 16GB", ram: "64GB DDR5-6400", storage: "2TB NVMe Gen 5", price: 3299, image: setupImage, mark: "3D / VIDEO" },
];

function PrebuiltCatalog() {
  const [tier, setTier] = useState("All Systems");
  const [sort, setSort] = useState("Featured");
  const shown = useMemo(() => {
    const list = tier === "All Systems" ? [...prebuiltSystems] : prebuiltSystems.filter((system) => system.tier === tier);
    if (sort === "Price: Low") list.sort((a, b) => a.price - b.price);
    return list;
  }, [tier, sort]);
  return (
    <div className="prebuilt-catalog">
      <div className="prebuilt-catalog-head">
        <span className="eyebrow light"><span /> READY-TO-SHIP SYSTEMS</span>
        <h1>BUILT. TESTED.<br />READY.</h1>
        <p>Expert-assembled systems, benchmarked under load and backed by a three-year warranty.</p>
      </div>
      <div className="prebuilt-filters">
        <div>{["All Systems", "Ultra Gaming", "Entry Gaming", "Workstation", "Office"].map((item) => <button className={tier === item ? "active" : ""} key={item} onClick={() => setTier(item)}>{item}</button>)}</div>
        <div className="prebuilt-selects">
          <button>CPU / GPU Brand <ChevronDown size={14} /></button>
          <button onClick={() => setSort(sort === "Featured" ? "Price: Low" : "Featured")}>{sort} <ChevronDown size={14} /></button>
        </div>
      </div>
      <div className="prebuilt-cards">
        {shown.map((system) => <article className="system-card" key={system.id}>
          <Link to={`/prebuilt/${system.id}`} className="system-image"><img src={system.image} alt={`${system.name} prebuilt PC`} /><span className="outline-tag">{system.tier}</span><span className="system-benchmark mono">{system.mark}</span></Link>
          <div className="system-copy">
            <span className="mono">SIMPLIFY.PC / {system.id.toUpperCase()}</span><h2>{system.name}</h2>
            <div className="system-specs"><span><b>CPU</b>{system.cpu}</span><span><b>GPU</b>{system.gpu}</span><span><b>RAM</b>{system.ram}</span><span><b>SSD</b>{system.storage}</span></div>
            <div className="system-buy"><strong>${system.price.toLocaleString()}</strong><Link to={`/prebuilt/${system.id}`} className="btn btn-outline">View specs</Link><Button onClick={() => addCartItem({ id: system.id, name: system.name, spec: `${system.cpu} / ${system.gpu}`, price: system.price, image: system.image })}>Add to cart</Button></div>
          </div>
        </article>)}
      </div>
    </div>
  );
}

function PrebuiltDetail() {
  const [added, setAdded] = useState(false);
  const components = [
    ["Processor", "Intel Core Ultra 7 265K"],
    ["Graphics", "ASUS TUF GeForce RTX 5080 16GB"],
    ["Motherboard", "ASUS ROG Strix Z890-F WiFi"],
    ["Memory", "G.Skill Trident Z5 32GB DDR5-6400"],
    ["Storage", "Samsung 990 Pro 2TB NVMe"],
    ["Cooling", "NZXT Kraken Elite 360"],
    ["Power", "Seasonic Vertex GX-1000 / 80+ Gold"],
    ["Case", "Fractal North XL / Black"],
  ];
  return (
    <div className="prebuilt-detail">
      <Link to="/prebuilt" className="back-link light-link"><ArrowLeft size={16} /> All prebuilt systems</Link>
      <div className="prebuilt-detail-hero">
        <div className="prebuilt-detail-image"><img src={rigImage} alt="Apex X7 prebuilt gaming PC" /><span className="outline-tag">ULTRA GAMING</span></div>
        <div className="prebuilt-detail-copy"><span className="eyebrow light"><span /> APEX SERIES / X7</span><h1>APEX X7</h1><p>Elite 4K performance, assembled around uncompromising thermals and silent operation.</p>
          <div className="benchmark-row"><div><strong>218</strong><span>FPS / 1440P</span></div><div><strong>142</strong><span>FPS / 4K</span></div><div><strong>62°C</strong><span>GPU LOAD</span></div></div>
          <div className="prebuilt-price"><div><span>Starting at</span><strong>$2,899</strong></div><Button variant="light" onClick={() => { if (addCartItem({ id: "apex-x7", name: "Apex X7", spec: "RTX 5080 / Core Ultra 7 / 32GB", price: 2899, image: rigImage })) setAdded(true); }}>{added ? <Check /> : <ShoppingBag />} {added ? "Add another" : "Add Apex X7"}</Button></div>
        </div>
      </div>
      <div className="prebuilt-breakdown">
        <div><span className="eyebrow"><span /> NO MYSTERY PARTS</span><h2>EVERY COMPONENT.<br />FULLY DISCLOSED.</h2><p>Exact brands and models. No substitutions without your approval.</p></div>
        <div className="component-breakdown">{components.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong><Check size={16} /></div>)}</div>
      </div>
      <div className="warranty-band"><ShieldCheck /><div><span className="mono">SIMPLIFY.PC SYSTEM WARRANTY</span><h2>3 YEARS. PARTS & LABOR.</h2><p>One team supports your complete system. Lifetime remote diagnostics included.</p></div><Link to="/expert">Talk to an expert <ArrowRight size={17} /></Link></div>
    </div>
  );
}

const buildSteps = ["CPU", "Motherboard", "RAM", "GPU", "Storage", "Cooler", "Case", "PSU", "Monitor"];
const buildParts = [
  ["AMD Ryzen 9 9950X", "$649", "170W"],
  ["ASUS ROG Crosshair X870E", "$699", "65W"],
  ["G.Skill Trident Z5 64GB", "$219", "12W"],
  ["NVIDIA GeForce RTX 5090", "$1,999", "575W"],
  ["Samsung 990 Pro 4TB", "$349", "8W"],
  ["NZXT Kraken Elite 360", "$279", "15W"],
  ["Fractal North XL", "$189", "0W"],
  ["Seasonic Prime TX-1300", "$389", "0W"],
  ["LG UltraGear 32 OLED", "$1,099", "0W"],
];
const buildImages = [hardwareImages.cpu, hardwareImages.board, hardwareImages.memory, hardwareImages.gpu, hardwareImages.storage, hardwareImages.cooling, rigImage, hardwareImages.storage, hardwareImages.monitor];

function Builder() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [showCode, setShowCode] = useState(false);
  const navigate = useNavigate();
  const choose = () => {
    const next = [...selected];
    next[step] = buildParts[step][0];
    setSelected(next);
    if (step < buildSteps.length - 1) setStep(step + 1);
  };
  const total = selected.reduce((sum, _, i) => sum + Number(buildParts[i][1].replace(/[$,]/g, "")), 0);
  const wattage = selected.reduce((sum, _, i) => sum + Number(buildParts[i][2].replace("W", "")), 0);
  return (
    <div className="builder-page">
      <div className="builder-head"><div><span className="eyebrow light"><span /> B.Y.O / BUILD YOUR OWN</span><h1>B.Y.O YOUR<br />MACHINE.</h1></div><p><span className="mono">STEP {String(step + 1).padStart(2, "0")} / 09</span>Select your {buildSteps[step].toLowerCase()}</p></div>
      <div className="builder-progress">{buildSteps.map((s, i) => <button key={s} className={i === step ? "active" : i < selected.length ? "done" : ""} onClick={() => i <= selected.length && setStep(i)}><span>{i < selected.length ? <Check size={13} /> : i + 1}</span><b>{s}</b></button>)}</div>
      <div className="builder-layout">
        <div className="builder-selection">
          <div className="selection-head"><div><span className="mono">SELECT COMPONENT</span><h2>{buildSteps[step]}</h2></div><span>{step === 0 ? "12" : "8"} compatible options</span></div>
          {[0, 1, 2].map((index) => {
            const names = [buildParts[step][0], `${buildSteps[step]} Performance Series`, `${buildSteps[step]} Essential`];
            const prices = [buildParts[step][1], `$${Math.max(129, 499 - step * 22)}`, `$${Math.max(89, 299 - step * 15)}`];
            return <button className={`part-option ${selected[step] === names[index] ? "selected" : ""}`} key={names[index]} onClick={index === 0 ? choose : () => { const n = [...selected]; n[step] = names[index]; setSelected(n); }}>
              <span className="radio">{selected[step] === names[index] && <span />}</span><div className="part-icon"><img src={buildImages[step]} alt={`${names[index]} product`} /></div><div className="part-main"><span className="mono">{index === 0 ? "RECOMMENDED" : index === 1 ? "HIGH PERFORMANCE" : "BEST VALUE"}</span><strong>{names[index]}</strong><small>{step === 0 ? "16-Core · Up to 5.7 GHz · AM5" : "Verified for your current configuration"}</small></div><div className="part-price"><strong>{prices[index]}</strong><span>{buildParts[step][2]}</span></div>
            </button>;
          })}
        </div>
        <aside className="build-summary">
          <div className="summary-title"><h3>Your build</h3><span>{selected.length}/9 parts</span></div>
          <div className="build-list">{buildSteps.map((s, i) => <div key={s}><span>{s}</span><strong>{selected[i] || "Not selected"}</strong>{selected[i] && <b>{buildParts[i][1]}</b>}</div>)}</div>
          <div className="compat-box"><ShieldCheck /><div><strong>All parts compatible</strong><span>Power headroom: {Math.max(0, 1300 - wattage)}W</span></div></div>
          <div className="totals"><div><span>Estimated wattage</span><strong>{wattage}W</strong></div><div><span>Total</span><strong>${total.toLocaleString()}</strong></div></div>
          <Button disabled={selected.length < 9} onClick={() => setShowCode(true)}>Generate store code <ArrowRight size={17} /></Button>
          <Button variant="outline" disabled={selected.length < 9} onClick={() => addCartItem({ id: `custom-build-${selected.join("-").length}`, name: "Custom PC Build", spec: `${selected.length} selected components / ${wattage}W`, price: total, image: rigImage })}><ShoppingBag size={17} /> Add build to cart</Button>
          <Button variant="outline" disabled={selected.length === 0} onClick={() => {
            sessionStorage.setItem("sharedBuild", JSON.stringify(selected.filter(Boolean)));
            navigate("/expert?shared=1");
          }}><MessageCircle size={17} /> Ask an expert about this build</Button>
        </aside>
      </div>
      {showCode && <CodeModal close={() => setShowCode(false)} total={total} />}
    </div>
  );
}

function CodeModal({ close, total }: { close: () => void; total: number }) {
  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <div className="code-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={close}><X /></button>
        <span className="eyebrow"><span /> BUILD SAVED</span><h2>TAKE YOUR BUILD<br />IN-STORE.</h2>
        <p>Show this code to a simplify.pc specialist. We&apos;ll pull your parts and assemble your system.</p>
        <div className="qr-wrap"><div className="fake-qr" aria-label="QR code pattern">{Array.from({ length: 64 }).map((_, i) => <i className={(i * 7 + i * i) % 5 < 2 ? "on" : ""} key={i} />)}</div><div><span className="mono">REFERENCE CODE</span><strong>CF-95X-2408</strong><small>Total configuration · ${total.toLocaleString()}</small></div></div>
        <Button onClick={close}>Done</Button>
      </div>
    </div>
  );
}

function Services() {
  const [tier, setTier] = useState(1);
  const [booked, setBooked] = useState(false);
  const tiers = [
    ["Deep Dust Clean", "$59", "45 min", "Complete internal and external cleaning"],
    ["System Tune-Up", "$119", "90 min", "Cleaning, thermal service and optimization"],
    ["Thermal Rebuild", "$169", "2 hours", "Full cooling teardown and repaste"],
  ];
  return (
    <div className="page-shell">
      <div className="page-head"><span className="eyebrow"><span /> CORECARE</span><h1>KEEP IT<br />AT ITS PEAK.</h1><p>Expert hands. Transparent pricing. Zero shortcuts.</p></div>
      <div className="service-booking">
        <div className="tier-list">
          <span className="mono">01 / SELECT A SERVICE</span>
          {tiers.map((t, i) => <button key={t[0]} className={tier === i ? "active" : ""} onClick={() => setTier(i)}><span className="radio">{tier === i && <span />}</span><div><h3>{t[0]}</h3><p>{t[3]}</p><small>{t[2]}</small></div><strong>{t[1]}</strong></button>)}
        </div>
        <div className="booking-panel">
          <span className="mono">02 / CHOOSE A TIME</span><h2>March 2026</h2>
          <div className="calendar-days">{["MON 16", "TUE 17", "WED 18", "THU 19", "FRI 20"].map((d, i) => <button className={i === 2 ? "active" : ""} key={d}>{d.split(" ")[0]}<strong>{d.split(" ")[1]}</strong></button>)}</div>
          <span className="mono">AVAILABLE TIMES</span>
          <div className="time-grid">{["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"].map((t, i) => <button className={i === 2 ? "active" : ""} key={t}>{t}</button>)}</div>
          <Button onClick={() => setBooked(true)}>{booked ? <><Check /> Appointment reserved</> : <>Book {tiers[tier][0]} <ArrowRight /></>}</Button>
        </div>
      </div>
    </div>
  );
}

const symptoms = ["PC won’t boot", "Blue screen on startup", "GPU overheating", "System is unusually slow", "Random shutdowns", "Display has artifacts"];

function Diagnose() {
  const [selected, setSelected] = useState<number | null>(null);
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  if (result) return (
    <div className="diagnostic-result">
      <span className="eyebrow"><span /> DIAGNOSTIC COMPLETE</span>
      <div className="result-icon"><Gauge /></div><h1>LIKELY GPU<br />THERMAL FAULT.</h1>
      <p>Your symptoms most commonly indicate degraded thermal compound or restricted airflow around the graphics card.</p>
      <div className="result-stats"><div><span>Probable faulty part</span><strong>Graphics card cooling</strong></div><div><span>Estimated repair</span><strong>$89 — $149</strong></div><div><span>Confidence</span><strong>High / 87%</strong></div></div>
      <div className="result-actions"><Button onClick={() => navigate("/services")}>Book repair service <ArrowRight /></Button><Button variant="outline" onClick={() => navigate("/shop")}>Shop replacement GPU</Button></div>
      <button className="text-button" onClick={() => { setResult(false); setSelected(null); }}><ArrowLeft /> Start over</button>
    </div>
  );
  return (
    <div className="diagnostic-page">
      <div className="diagnostic-aside"><span className="eyebrow light"><span /> SMART DIAGNOSTICS</span><h1>LET&apos;S FIND<br />THE FAULT.</h1><p>Answer a few simple questions. Our diagnostic engine will identify the most likely cause and your next best step.</p><div className="diagnostic-progress"><span>01</span><i /><span>02</span><i /><span>03</span></div></div>
      <div className="question-panel"><span className="mono">QUESTION 01 / 03</span><h2>What&apos;s the main<br />symptom?</h2><p>Choose the option that best describes your issue.</p>
        <div className="symptom-grid">{symptoms.map((s, i) => <button className={selected === i ? "active" : ""} key={s} onClick={() => setSelected(i)}><span className="radio">{selected === i && <span />}</span>{s}<ChevronRight /></button>)}</div>
        <Button disabled={selected === null} onClick={() => setResult(true)}>Continue diagnosis <ArrowRight /></Button>
      </div>
    </div>
  );
}

function ExpertAdvice() {
  const [mode, setMode] = useState<"chat" | "book">("chat");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [faq, setFaq] = useState<number | null>(0);
  const [booked, setBooked] = useState(false);
  const [consultType, setConsultType] = useState<"video" | "store">("video");
  const [consultDate, setConsultDate] = useState("2026-03-18");
  const [consultTime, setConsultTime] = useState("1:30 PM");
  const sharedBuild = useMemo(() => {
    try { return JSON.parse(sessionStorage.getItem("sharedBuild") || "[]") as string[]; }
    catch { return []; }
  }, []);
  const send = () => {
    if (!message.trim()) return;
    setMessages([...messages, message.trim()]);
    setMessage("");
  };
  const faqs = [
    ["Can you check whether my parts are compatible?", "Yes. Share your B.Y.O build and an expert will verify sockets, dimensions, cooling, power headroom, and BIOS requirements."],
    ["Is expert advice free?", "Live text advice and 15-minute video consultations are complimentary. Longer build-planning sessions can be booked in store."],
    ["Can I bring parts I already own?", "Absolutely. Tell us the exact models and we can plan a compatible upgrade around your current hardware."],
    ["How quickly will an expert respond?", "Live chat typically responds in under two minutes during store hours, Monday through Saturday."],
  ];
  return (
    <div className="expert-page">
      <div className="expert-hero"><span className="eyebrow light"><span /> HUMAN SUPPORT / ZERO GUESSWORK</span><h1>ASK SOMEONE<br />WHO BUILDS.</h1><p>Real advice from working build experts. No sales scripts. No bots.</p><div className="expert-status"><span /><b>4 experts online</b> · Average reply under 2 minutes</div></div>
      <div className="consultation-hub">
        <div className="consult-tabs"><button className={mode === "chat" ? "active" : ""} onClick={() => setMode("chat")}><MessageCircle />Live text chat<span>Talk now</span></button><button className={mode === "book" ? "active" : ""} onClick={() => setMode("book")}><Calendar />Book a consultation<span>Video or in-store</span></button></div>
        {mode === "chat" ? <div className="full-chat">
          <div className="chat-heading"><div className="expert-avatar">AK</div><div><strong>Alex Kim</strong><span>Senior Build Expert · Online</span></div><span className="status-dot" /></div>
          <div className="full-chat-messages">
            <div className="expert-message">Welcome to simplify.pc. Tell me what you&apos;re building and what you need the system to do.</div>
            {sharedBuild.length > 0 && <div className="shared-build"><span className="mono">SHARED FROM B.Y.O</span><strong>Your current build · {sharedBuild.length} parts</strong>{sharedBuild.map((part) => <small key={part}><Check size={12} />{part}</small>)}</div>}
            {messages.map((item, i) => <div className="user-message" key={`${item}-${i}`}>{item}</div>)}
          </div>
          <div className="full-chat-compose"><input value={message} onChange={(e) => setMessage(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Type your question..." /><button onClick={send}><Send /></button></div>
        </div> : <div className="consult-booking">
          <div className="consult-type"><button className={consultType === "video" ? "active" : ""} onClick={() => setConsultType("video")}><Video /><strong>15-min video call</strong><span>Screen-share your build</span></button><button className={consultType === "store" ? "active" : ""} onClick={() => setConsultType("store")}><Store /><strong>In-store session</strong><span>Hands-on planning</span></button></div>
          <label className="date-picker-field"><span className="mono">SELECT A DATE</span><input type="date" min="2026-03-01" value={consultDate} onChange={(event) => setConsultDate(event.target.value)} /></label>
          <div className="consult-times"><span className="mono">AVAILABLE TIMES</span><div>{["9:30 AM", "11:00 AM", "1:30 PM", "3:00 PM", "4:30 PM"].map((time) => <button className={consultTime === time ? "active" : ""} onClick={() => setConsultTime(time)} key={time}>{time}</button>)}</div></div>
          <Button onClick={() => setBooked(true)}>{booked ? <><Check /> {consultType === "store" ? "In-store session" : "Video call"} booked</> : <>Confirm free consultation <ArrowRight /></>}</Button>
        </div>}
      </div>
      <div className="faq-section"><div><span className="eyebrow"><span /> QUICK ANSWERS</span><h2>BEFORE YOU ASK.</h2></div><div className="faq-list">{faqs.map(([question, answer], i) => <button key={question} className={faq === i ? "open" : ""} onClick={() => setFaq(faq === i ? null : i)}><span>{String(i + 1).padStart(2, "0")}</span><div><strong>{question}</strong>{faq === i && <p>{answer}</p>}</div><b>{faq === i ? "−" : "+"}</b></button>)}</div></div>
    </div>
  );
}

type ForumCategory = "General Tech" | "Custom PC Builds" | "Hardware Troubleshooting" | "Performance Benchmarks" | "Battlestation Showoffs";
type ForumPost = {
  slug: string;
  author: string;
  initials: string;
  role: string;
  time: string;
  category: ForumCategory;
  title: string;
  excerpt: string;
  votes: number;
  comments: number;
  image?: string;
};

const forumPosts: ForumPost[] = [
  { slug: "rtx-4090-cable-clearance", author: "Maya Chen", initials: "MC", role: "Verified Builder", time: "18 min ago", category: "Hardware Troubleshooting", title: "RTX 4090 power cable clearance issues in mid-tower cases", excerpt: "I tested four 12VHPWR cable routes in a compact airflow case. Here are the bend radius measurements, temperatures, and the cleanest solution.", votes: 284, comments: 48 },
  { slug: "silent-1440p-build", author: "Jon Bell", initials: "JB", role: "Moderator", time: "1 hr ago", category: "Custom PC Builds", title: "A genuinely silent 1440p build under $1,600", excerpt: "After three fan curves and a case swap, this Ryzen 7 and RTX 4070 Super build stays below 31 dBA while gaming.", votes: 196, comments: 31, image: "https://images.unsplash.com/photo-1626218174358-7769486c4b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBnYW1pbmclMjBQQyUyMGJhdHRsZXN0YXRpb24lMjBkZXNrJTIwUkdCJTIwc2V0dXBlbnwxfHx8fDE3OTIxMTA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
  { slug: "am5-memory-results", author: "Morgan Reed", initials: "MR", role: "Super Admin", time: "3 hrs ago", category: "Performance Benchmarks", title: "AM5 memory scaling: 6000 CL30 vs 6400 CL32 results", excerpt: "A controlled benchmark across twelve games and three productivity workloads, including one-percent lows and power draw.", votes: 143, comments: 22 },
  { slug: "first-battlestation", author: "Niko Foster", initials: "NF", role: "Community Member", time: "Yesterday", category: "Battlestation Showoffs", title: "First battlestation after years on a laptop", excerpt: "Kept the desk minimal and focused the budget on a color-accurate display. Cable management took longer than the build.", votes: 89, comments: 17, image: "https://images.unsplash.com/photo-1696710257827-75e2e5954059?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjdXN0b20lMjBnYW1pbmclMjBQQyUyMGJhdHRsZXN0YXRpb24lMjBkZXNrJTIwUkdCJTIwc2V0dXBlbnwxfHx8fDE3OTIxMTA1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080" },
];

function CreateDiscussionModal({ close, publish }: { close: () => void; publish: (post: ForumPost) => void }) {
  const [category, setCategory] = useState<ForumCategory>("General Tech");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [preview, setPreview] = useState("");
  const insert = (before: string, after = before) => setBody((value) => `${value}${value ? "\n" : ""}${before}your text${after}`);
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;
    publish({ slug: `discussion-${Date.now()}`, author: sessionStorage.getItem("simplifyName") || "Alex Morgan", initials: "AM", role: "Community Member", time: "Just now", category, title: title.trim(), excerpt: body.trim(), votes: 0, comments: 0, image: preview || undefined });
  };
  const loadImage = (file?: File) => file && setPreview(URL.createObjectURL(file));
  return <div className="forum-modal-layer" onMouseDown={close}><form className="discussion-modal" onSubmit={submit} onMouseDown={(event) => event.stopPropagation()}>
    <div className="discussion-modal-head"><div><span className="mono">NEW DISCUSSION</span><h2>Share with the community</h2></div><button type="button" onClick={close} aria-label="Close discussion form"><X /></button></div>
    <label>Category<select value={category} onChange={(event) => setCategory(event.target.value as ForumCategory)}>{["General Tech", "Custom PC Builds", "Hardware Troubleshooting", "Performance Benchmarks", "Battlestation Showoffs"].map((item) => <option key={item}>{item}</option>)}</select></label>
    <label>Discussion title<input required value={title} onChange={(event) => setTitle(event.target.value)} placeholder="e.g., RTX 4090 power cable clearance issues in mid-tower cases" /></label>
    <label>Post body<div className="editor-shell"><div className="editor-toolbar"><button type="button" onClick={() => insert("**")} aria-label="Bold"><Bold /></button><button type="button" onClick={() => insert("_")} aria-label="Italic"><Italic /></button><button type="button" onClick={() => insert("[", "](https://)")} aria-label="Add link"><Link2 /></button><button type="button" onClick={() => insert("`")} aria-label="Code snippet"><Box /></button><button type="button" onClick={() => insert("- ", "")} aria-label="Bullet list"><List /></button></div><textarea required value={body} onChange={(event) => setBody(event.target.value)} placeholder="Explain your question, what you have tried, and include relevant specifications..." /></div></label>
    <label className="discussion-upload" onDragOver={(event) => event.preventDefault()} onDrop={(event) => { event.preventDefault(); loadImage(event.dataTransfer.files[0]); }}>{preview ? <img src={preview} alt="Attachment preview" /> : <><Image /><strong>Drop build photos or screenshots here</strong><span>PNG or JPG · up to 10 MB</span></>}<input type="file" accept="image/*" onChange={(event) => loadImage(event.target.files?.[0])} /></label>
    <div className="discussion-actions"><button type="button" onClick={close}>Cancel</button><Button type="submit">Publish post <ArrowRight /></Button></div>
  </form></div>;
}

function Community() {
  const [category, setCategory] = useState("All Discussions");
  const [sort, setSort] = useState<"Trending" | "Latest" | "Unanswered">("Trending");
  const [forumQuery, setForumQuery] = useState("");
  const [creating, setCreating] = useState(false);
  const [posts, setPosts] = useState(forumPosts);
  const [voted, setVoted] = useState<string[]>([]);
  const categories: [string, React.ElementType][] = [["All Discussions", MessageCircle], ["General Tech", Cpu], ["Custom PC Builds", Wrench], ["Hardware Troubleshooting", ShieldCheck], ["Performance Benchmarks", Gauge], ["Battlestation Showoffs", Monitor]];
  const visible = posts
    .filter((post) => category === "All Discussions" || post.category === category)
    .filter((post) => sort !== "Unanswered" || post.comments === 0)
    .filter((post) => `${post.title} ${post.excerpt} ${post.category} ${post.author}`.toLowerCase().includes(forumQuery.toLowerCase()))
    .sort((a, b) => sort === "Latest" ? (a.time === "Just now" ? -1 : 1) : b.votes - a.votes);
  const toggleVote = (slug: string) => {
    setVoted((current) => current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug]);
    setPosts((current) => current.map((post) => post.slug === slug ? { ...post, votes: post.votes + (voted.includes(slug) ? -1 : 1) } : post));
  };
  return <div className="community-page">
    <section className="community-hero"><div className="community-hero-copy"><span className="eyebrow light"><span /> BUILD TOGETHER / LEARN FASTER</span><h1>B.Y.O COMMUNITY <em>&amp;</em><br />TECH HUB</h1><p>Real builds, measured advice, and practical answers from people who know the hardware.</p><div className="forum-search"><Search /><input value={forumQuery} onChange={(event) => setForumQuery(event.target.value)} placeholder="Search discussions, PC build guides, or threads..." aria-label="Search community discussions" />{forumQuery && <button onClick={() => setForumQuery("")} aria-label="Clear community search"><X /></button>}</div></div><Button variant="light" onClick={() => setCreating(true)}><Plus />Create new discussion</Button></section>
    <div className="community-layout">
      <aside className="forum-sidebar"><span className="mono">CHANNELS</span>{categories.map(([item, Icon]) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)}><Icon />{item}<ChevronRight /></button>)}<div><strong>Community standards</strong><p>Be specific, share sources, and help people build with confidence.</p><Link to="/services">Read guidelines <ArrowRight /></Link></div></aside>
      <section className="forum-feed">
        <div className="feed-toolbar"><div>{(["Trending", "Latest", "Unanswered"] as const).map((item) => <button key={item} className={sort === item ? "active" : ""} onClick={() => setSort(item)}>{item === "Trending" && <Flame />}{item}</button>)}</div><span className="mono">{visible.length.toString().padStart(2, "0")} DISCUSSIONS</span></div>
        <div className="discussion-list">{visible.map((post) => <article className="discussion-card" key={post.slug}>
          <div className="discussion-author"><span>{post.initials}</span><div><strong>{post.author}<b>{post.role}</b></strong><small>{post.time} · <em>{post.category}</em></small></div></div>
          <Link to={`/community/${post.slug}`} className="discussion-body"><div><h2>{post.title}</h2><p>{post.excerpt}</p></div>{post.image && <img src={post.image} alt={`${post.title} preview`} />}</Link>
          <div className="discussion-engagement"><button className={voted.includes(post.slug) ? "active" : ""} onClick={() => toggleVote(post.slug)}><ArrowUp />{post.votes}</button><Link to={`/community/${post.slug}`}><MessageCircle />{post.comments}</Link><button onClick={() => navigator.clipboard?.writeText(`${window.location.origin}/community/${post.slug}`)}><Share2 />Share</button></div>
        </article>)}</div>
        {visible.length === 0 && <div className="forum-empty"><MessageCircle /><h2>{forumQuery ? "No matching discussions" : "No unanswered discussions"}</h2><p>{forumQuery ? "Try another search term or clear the current query." : "Everything has a response. Start a new question for the community."}</p>{forumQuery ? <Button onClick={() => setForumQuery("")}>Clear search</Button> : <Button onClick={() => setCreating(true)}>Create discussion</Button>}</div>}
      </section>
    </div>
    {creating && <CreateDiscussionModal close={() => setCreating(false)} publish={(post) => { setPosts([post, ...posts]); setSort("Latest"); setCreating(false); }} />}
  </div>;
}

function CommunityThread() {
  const [votes, setVotes] = useState(284);
  const [voted, setVoted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([
    { author: "Alex Kim", initials: "AK", role: "Verified Builder", time: "12 min ago", body: "The safest target is 35 mm of clearance from the connector before the cable begins to bend. On compact cases I use a 90-degree native cable from the PSU manufacturer rather than an adapter.", nested: "Also check the side-panel pressure after a few heat cycles. A cable that looks clear when cold can shift slightly." },
    { author: "Priya S.", initials: "PS", role: "Community Member", time: "6 min ago", body: "This measurement guide solved my North case fit. Moving the radiator to the top gained just enough room without changing the cable.", nested: "" },
  ]);
  const submitReply = () => {
    if (!reply.trim()) return;
    setReplies([...replies, { author: sessionStorage.getItem("simplifyName") || "Alex Morgan", initials: "AM", role: "Community Member", time: "Just now", body: reply.trim(), nested: "" }]);
    setReply("");
  };
  return <div className="thread-page">
    <div className="thread-shell">
      <div className="thread-breadcrumb"><Link to="/community">Community</Link><ChevronRight /><span>Hardware Troubleshooting</span></div>
      <header className="thread-header"><span className="thread-category">Hardware Troubleshooting</span><h1>RTX 4090 power cable clearance issues in mid-tower cases</h1><div className="thread-author"><span>MC</span><div><strong>Maya Chen <b>Verified Builder</b></strong><small>Published March 18, 2026 · 8 min read</small></div></div></header>
      <div className="thread-grid">
        <article className="thread-content">
          <p className="thread-lead">I tested four 12VHPWR cable routes in a compact airflow case to find a safe bend radius without sacrificing side-panel clearance.</p>
          <p>The common advice to “avoid bending near the connector” is correct, but it is not very useful without measurements. My test system uses an RTX 4090 Founders Edition in a 46-liter mid-tower with 170 mm of listed CPU cooler clearance.</p>
          <img src={setupImage} alt="Desktop PC build used for cable clearance testing" />
          <h2>What worked</h2><p>Routing below the card produced the cleanest path. The cable remained straight for 38 mm before its first bend and did not touch the glass panel. GPU temperatures were unchanged through a 30-minute load test.</p>
          <pre><code>Minimum straight run: 35 mm{"\n"}Measured panel clearance: 11 mm{"\n"}Peak connector temperature: 42.6°C</code></pre>
          <h2>Recommendation</h2><p>Use a native PSU cable whenever possible, confirm the connector is fully seated, and photograph the latch before closing the panel. Avoid forcing the side panel against the cable.</p>
          <div className="thread-actions"><button className={voted ? "active" : ""} onClick={() => { setVoted(!voted); setVotes(votes + (voted ? -1 : 1)); }}><ArrowUp />{votes} Upvotes</button><button className={bookmarked ? "active" : ""} onClick={() => setBookmarked(!bookmarked)}><Bookmark />{bookmarked ? "Saved" : "Bookmark"}</button><button onClick={() => navigator.clipboard?.writeText(window.location.href)}><Share2 />Share</button></div>
        </article>
        <aside className="thread-aside"><span className="mono">THREAD SUMMARY</span><div><span>Replies</span><strong>{replies.length + 46}</strong></div><div><span>Views</span><strong>8.2K</strong></div><div><span>Last active</span><strong>Now</strong></div><Link to="/community">Explore more discussions <ArrowRight /></Link></aside>
      </div>
      <section className="comments-section"><div className="comments-heading"><div><span className="mono">COMMUNITY RESPONSES</span><h2>{replies.length + 46} replies</h2></div><span>Sorted by most helpful</span></div>
        <div className="reply-composer"><div className="editor-toolbar"><button onClick={() => setReply(`${reply}**text**`)}><Bold /></button><button onClick={() => setReply(`${reply}\`code\``)}><Box /></button><button onClick={() => setReply(`${reply}[link](https://)`)}><Link2 /></button></div><textarea value={reply} onChange={(event) => setReply(event.target.value)} placeholder="Add a constructive reply..." /><Button onClick={submitReply}>Post reply <Send /></Button></div>
        <div className="comment-tree">{replies.map((comment, index) => <article className="comment" key={`${comment.author}-${index}`}><div className="comment-avatar">{comment.initials}</div><div><div className="comment-meta"><strong>{comment.author}<b>{comment.role}</b></strong><span>{comment.time}</span></div><p>{comment.body}</p><button><MessageCircle />Reply</button>{comment.nested && <div className="nested-comment"><span>TM</span><div><strong>Tom Mercer <b>Moderator</b></strong><p>{comment.nested}</p><button><MessageCircle />Reply</button></div></div>}</div></article>)}</div>
      </section>
    </div>
  </div>;
}

function Login() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!identity.trim() || !password.trim() || (mode === "register" && (!fullName.trim() || !phone.trim()))) {
      setError("Complete all required fields to continue.");
      return;
    }
    if (mode === "register" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    const normalized = identity.toLowerCase();
    const role = normalized.includes("super") ? "super-admin" : normalized.includes("admin") ? "admin" : "customer";
    sessionStorage.setItem("simplifyRole", role);
    sessionStorage.setItem("simplifyName", mode === "register" ? fullName : role === "customer" ? "Alex Morgan" : role === "super-admin" ? "Morgan Reed" : "Alex Kim");
    if (role === "customer" && !localStorage.getItem("simplifyCart")) localStorage.setItem("simplifyCart", JSON.stringify(defaultCart));
    window.dispatchEvent(new Event("simplify-auth"));
    navigate(role === "customer" ? "/account" : "/admin");
  };
  return (
    <div className="login-page">
      <div className="login-visual"><div className="login-grid" /><span className="eyebrow light"><span /> SIMPLIFY.PC ACCOUNT</span><h1>YOUR SYSTEM.<br />YOUR CONTROL.</h1><p>Track builds, manage orders, and get support from one secure workspace.</p><div className="login-stats"><span><b>24/7</b>Order tracking</span><span><b>3 YR</b>System coverage</span><span><b>1:1</b>Expert support</span></div></div>
      <form className="login-card" onSubmit={submit}>
        <Link to="/" className="brand brand-logo"><span className="brand-mark"><span /></span><span className="brand-name">simplify.pc</span></Link>
        <div className="auth-tabs"><button type="button" className={mode === "login" ? "active" : ""} onClick={() => setMode("login")}>Log in</button><button type="button" className={mode === "register" ? "active" : ""} onClick={() => setMode("register")}>Create account</button></div>
        <div><span className="mono">{mode === "login" ? "SECURE ACCESS" : "NEW CUSTOMER"}</span><h2>{mode === "login" ? "LOG IN" : "REGISTER"}</h2><p>{mode === "login" ? "Use your account credentials to continue." : "Create your customer workspace in under a minute."}</p></div>
        {mode === "register" && <label>Full name<input value={fullName} onChange={(event) => { setFullName(event.target.value); setError(""); }} placeholder="Alex Morgan" autoComplete="name" /></label>}
        <label>Email address<input type="email" value={identity} onChange={(event) => { setIdentity(event.target.value); setError(""); }} placeholder="you@example.com" autoComplete="username" /></label>
        {mode === "register" && <label>Phone number<input type="tel" value={phone} onChange={(event) => { setPhone(event.target.value); setError(""); }} placeholder="+1 (555) 000-0000" autoComplete="tel" /></label>}
        <label>Password<div className="password-field"><input type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError(""); }} placeholder="Enter your password" autoComplete={mode === "login" ? "current-password" : "new-password"} /><span>••••</span></div></label>
        {mode === "register" && <label>Confirm password<div className="password-field"><input type="password" value={confirmPassword} onChange={(event) => { setConfirmPassword(event.target.value); setError(""); }} placeholder="Repeat your password" autoComplete="new-password" /><span>••••</span></div></label>}
        {mode === "login" && <div className="login-options"><label><input type="checkbox" /> Remember me</label><button type="button">Forgot password?</button></div>}
        {error && <p className="login-error">{error}</p>}
        <Button type="submit">{mode === "login" ? "Log in" : "Create account"} <ArrowRight /></Button>
        <small>Smart routing demo: use an email containing <b>super</b>, <b>admin</b>, or any customer email. Any password is accepted.</small>
      </form>
    </div>
  );
}

type AdminView = "overview" | "inventory" | "orders" | "consultations" | "banners";
type InventoryItem = { name: string; category: string; price: number; stock: number; image: string; discount: number; status: "In Stock" | "Low Stock" | "Out of Stock"; description: string };
type AdminOrder = { id: string; customer: string; email: string; type: "pickup" | "delivery"; code: string; total: string; status: string; payment: string; timestamp: string; items: string[] };

function AdminDashboard() {
  const [view, setView] = useState<AdminView>("overview");
  const [orderType, setOrderType] = useState<"all" | "pickup" | "delivery">("all");
  const [editing, setEditing] = useState<InventoryItem | "new" | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [rangeOpen, setRangeOpen] = useState(false);
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [customRange, setCustomRange] = useState(false);
  const [inventoryQuery, setInventoryQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [stockFilter, setStockFilter] = useState("All Stock");
  const [productPreview, setProductPreview] = useState("");
  const [stockDraft, setStockDraft] = useState(0);
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { name: "GeForce RTX 4080 Super", category: "GPU", price: 999, stock: 24, image: hardwareImages.gpu, discount: 15, status: "In Stock", description: "16GB GDDR6X performance graphics card" },
    { name: "Ryzen 9 9950X", category: "CPU", price: 649, stock: 18, image: hardwareImages.cpu, discount: 0, status: "In Stock", description: "16-core AM5 desktop processor" },
    { name: "ROG Crosshair X870E", category: "Motherboard", price: 699, stock: 7, image: hardwareImages.board, discount: 0, status: "Low Stock", description: "Premium X870E ATX motherboard" },
    { name: "Trident Z5 Neo 64GB", category: "RAM", price: 219, stock: 42, image: hardwareImages.memory, discount: 10, status: "In Stock", description: "DDR5-6400 dual-channel memory" },
    { name: "Kraken Elite 360", category: "CPU Cooler", price: 279, stock: 0, image: hardwareImages.cooling, discount: 0, status: "Out of Stock", description: "360mm liquid CPU cooler" },
  ]);
  const role = sessionStorage.getItem("simplifyRole") === "admin" ? "admin" : "super-admin";
  const isSuper = role === "super-admin";
  const orders: AdminOrder[] = [
    { id: "SPC-24081", customer: "Alex Morgan", email: "alex@example.com", type: "pickup", code: "CF-95X-2408", total: "$1,783.96", status: "Ready for pickup", payment: "Paid · Visa •4242", timestamp: "Mar 16, 2026 · 10:42 AM", items: ["GeForce RTX 4080 Super", "Ryzen 9 9950X", "In-store assembly"] },
    { id: "SPC-24080", customer: "Jamie Lee", email: "jamie@example.com", type: "delivery", code: "UPS-4839201", total: "$2,899.00", status: "In transit", payment: "Paid · Digital wallet", timestamp: "Mar 15, 2026 · 4:18 PM", items: ["Apex X7 Prebuilt PC"] },
    { id: "SPC-24079", customer: "Morgan Reed", email: "morgan@example.com", type: "pickup", code: "CF-71K-2399", total: "$649.00", status: "Preparing", payment: "Pay at pickup", timestamp: "Mar 15, 2026 · 1:04 PM", items: ["Ryzen 9 9950X"] },
    { id: "SPC-24078", customer: "Taylor Chen", email: "taylor@example.com", type: "delivery", code: "UPS-4839172", total: "$1,299.00", status: "Processing", payment: "Paid · Mastercard •1881", timestamp: "Mar 14, 2026 · 9:31 AM", items: ["GeForce RTX 5080"] },
  ];
  const visibleOrders = orderType === "all" ? orders : orders.filter((order) => order.type === orderType);
  const filteredInventory = inventory.filter((item) =>
    item.name.toLowerCase().includes(inventoryQuery.toLowerCase()) &&
    (categoryFilter === "All Categories" || item.category === categoryFilter) &&
    (stockFilter === "All Stock" || item.status === stockFilter)
  );
  const saveProduct = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const stock = Number(data.get("stock"));
    const item: InventoryItem = {
      name: String(data.get("name")), category: String(data.get("category")), price: Number(data.get("price")), stock,
      image: productPreview || (editing !== "new" && editing ? editing.image : hardwareImages.gpu), discount: Number(data.get("discount")),
      status: stock === 0 ? "Out of Stock" : "In Stock", description: String(data.get("description")),
    };
    setInventory(editing === "new" ? [...inventory, item] : inventory.map((product) => product.name === editing?.name ? item : product));
    setEditing(null);
    setProductPreview("");
  };
  const titles: Record<AdminView, string> = { overview: "Business overview", inventory: "Inventory & products", orders: "Orders & fulfillment", consultations: "Consultation schedule", banners: "Advertising control center" };
  return (
    <div className="dashboard-shell">
      <aside className="dashboard-nav">
        <div><span className="brand brand-logo"><span className="brand-mark"><span /></span><span className="brand-name">simplify.pc</span></span><small className="mono">ADMIN CONTROL</small></div>
        <nav>{([["overview", BarChart3, "Overview"], ["inventory", Package, "Inventory"], ["orders", Receipt, "Orders"], ["consultations", Users, "Consultations"], ["banners", Megaphone, "Banners"]] as const).map(([id, Icon, label]) => <button className={view === id ? "active" : ""} onClick={() => setView(id)} key={id}><Icon />{label}</button>)}</nav>
        <div className="admin-user"><span>{isSuper ? "MR" : "AK"}</span><div><strong>{isSuper ? "Morgan Reed" : "Alex Kim"}</strong><small>{isSuper ? "Super Administrator" : "Standard Administrator"}</small></div><Link to="/login" onClick={() => { sessionStorage.removeItem("simplifyRole"); sessionStorage.removeItem("simplifyName"); window.dispatchEvent(new Event("simplify-auth")); }}><ArrowLeft /></Link></div>
      </aside>
      <div className="dashboard-main">
        <header className="dashboard-header"><div><span className="mono">{isSuper ? "SUPER ADMIN" : "ADMIN"} / {view.toUpperCase()}</span><h1>{titles[view]}</h1></div><div><span className="dashboard-live"><i />Live store</span>{view === "inventory" && <Button onClick={() => { setProductPreview(""); setStockDraft(0); setEditing("new"); }}><Plus />Add product</Button>}<div className="admin-avatar">{isSuper ? "MR" : "AK"}</div></div></header>
        {view === "overview" && <div className="dashboard-content">
          <div className="metric-grid">
            {isSuper && <article><span><DollarSign />Total revenue</span><strong>$284,960</strong><small><TrendingUp /> +18.4% vs last month</small></article>}
            <article><span><ShoppingBag />Transactions</span><strong>{orders.length}</strong><small>Matches orders table exactly</small></article>
            <article><span><Package />Inventory value</span><strong>$418,205</strong><small>2,841 units in stock</small></article>
            <article><span><User />Customers</span><strong>8,492</strong><small><TrendingUp /> +284 this month</small></article>
          </div>
          <div className="analytics-grid">
            {isSuper ? <><article className="sales-chart"><div className="panel-heading"><div><span className="mono">SALES ANALYTICS</span><h2>Revenue performance</h2></div><div className="range-control"><button onClick={() => setRangeOpen(!rangeOpen)}>{dateRange} <ChevronDown /></button>{rangeOpen && <div className="range-menu">{["Last 7 Days", "Last 30 Days", "Last 90 Days", "Year to Date"].map((range) => <button key={range} onClick={() => { setDateRange(range); setRangeOpen(false); }}>{range}</button>)}<button onClick={() => { setCustomRange(true); setRangeOpen(false); }}>Custom date range</button></div>}</div></div><div className="chart-value"><strong>$84,320</strong><span>Net revenue</span></div><div className="bar-chart">{[36, 48, 41, 62, 55, 72, 67, 85, 74, 91, 83, 100].map((height, i) => <div key={i}><i style={{ height: `${height}%` }} /><span>{i % 2 === 0 ? `W${i / 2 + 1}` : ""}</span></div>)}</div></article>
            <article className="financial-panel"><div className="panel-heading"><div><span className="mono">FINANCIAL SUMMARY</span><h2>This month</h2></div></div>{[["Gross sales", "$96,440"], ["Refunds", "−$3,120"], ["Cost of goods", "−$48,250"], ["Shipping", "−$2,875"]].map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}<div className="net-profit"><span>Net profit</span><strong>$42,195</strong></div></article></> : <article className="restricted-panel"><ShieldCheck /><div><span className="mono">ROLE-BASED ACCESS</span><h2>Financial reporting is restricted</h2><p>Standard administrators retain full operational access while revenue and accounting data remain available only to Super Admins.</p></div></article>}
          </div>
          <div className="recent-orders"><div className="panel-heading"><div><span className="mono">LIVE TRANSACTIONS / {orders.length} TOTAL</span><h2>Orders & transactions</h2></div><button onClick={() => setView("orders")}>View all <ArrowRight /></button></div><AdminOrderTable orders={orders} onSelect={setSelectedOrder} /></div>
        </div>}
        {view === "inventory" && <div className="dashboard-content"><div className="inventory-tools"><div><Search /><input value={inventoryQuery} onChange={(event) => setInventoryQuery(event.target.value)} placeholder="Search inventory..." /></div><label className="inventory-filter"><span>Category</span><select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}><option>All Categories</option>{["GPU", "CPU", "Motherboard", "RAM", "CPU Cooler", "Case Fan", "Casing", "PSU", "Monitor", "Prebuilt PC"].map((category) => <option key={category}>{category}</option>)}</select><ChevronDown /></label><label className="inventory-filter"><span>Status</span><select value={stockFilter} onChange={(event) => setStockFilter(event.target.value)}><option>All Stock</option><option>In Stock</option><option>Low Stock</option><option>Out of Stock</option></select><ChevronDown /></label></div><div className="inventory-table"><div className="inventory-row inventory-labels"><span>Product</span><span>Category</span><span>Price</span><span>Available quantity</span><span>Status</span><span /></div>{filteredInventory.map((item) => <div className="inventory-row" key={item.name}><div><img src={item.image} alt={item.name} /><span><strong>{item.name}</strong>{item.discount > 0 && <small>{item.discount}% OFF</small>}</span></div><span>{item.category}</span><b>{item.discount ? <><s>${item.price}</s> ${(item.price * (1 - item.discount / 100)).toFixed(0)}</> : `$${item.price}`}</b><span>{item.stock} available</span><span className={item.status === "In Stock" ? "stock-ok" : item.status === "Out of Stock" ? "stock-out-admin" : "stock-low"}>{item.status}</span><div className="row-actions"><button onClick={() => { setStockDraft(item.stock); setEditing(item); }} aria-label={`Edit ${item.name}`}><Edit3 /></button><button onClick={() => window.confirm(`Archive ${item.name}?`) && setInventory(inventory.filter((product) => product.name !== item.name))} aria-label={`Archive ${item.name}`}><Trash2 /></button></div></div>)}</div>{filteredInventory.length === 0 && <div className="inventory-empty"><Package /><strong>No matching products</strong><span>Adjust the search or filter selections.</span></div>}</div>}
        {view === "orders" && <div className="dashboard-content"><div className="order-tabs"><button className={orderType === "all" ? "active" : ""} onClick={() => setOrderType("all")}>All transactions <span>{orders.length}</span></button><button className={orderType === "pickup" ? "active" : ""} onClick={() => setOrderType("pickup")}>Store pickup <span>{orders.filter((order) => order.type === "pickup").length}</span></button><button className={orderType === "delivery" ? "active" : ""} onClick={() => setOrderType("delivery")}>Delivery <span>{orders.filter((order) => order.type === "delivery").length}</span></button></div><div className="orders-panel"><div className="panel-heading"><div><span className="mono">FULFILLMENT QUEUE</span><h2>{orderType === "all" ? "All active orders" : orderType === "pickup" ? "Store pickup orders" : "Delivery orders"}</h2></div><button>Export <Upload /></button></div><AdminOrderTable orders={visibleOrders} onSelect={setSelectedOrder} /></div></div>}
        {view === "consultations" && <ConsultationAdmin />}
        {view === "banners" && <BannerAdmin />}
      </div>
      {editing && <div className="admin-modal-layer" onMouseDown={() => setEditing(null)}>
        <form className="product-form-modal product-editor" onMouseDown={(event) => event.stopPropagation()} onSubmit={saveProduct}>
          <div><span className="mono">{editing === "new" ? "NEW INVENTORY ITEM" : "EDIT PRODUCT"}</span><button type="button" onClick={() => setEditing(null)}><X /></button></div>
          <h2>{editing === "new" ? "Add product" : "Edit details"}</h2>
          <label className={`image-upload ${productPreview ? "has-preview" : ""}`}>{productPreview ? <img src={productPreview} alt="New product preview" /> : <><Upload /><strong>Drag and drop or upload images</strong><span>PNG or JPG · Preview generated instantly</span></>}<input type="file" accept="image/*" onChange={(event) => { const file = event.target.files?.[0]; if (file) setProductPreview(URL.createObjectURL(file)); }} /></label>
          <div className="admin-form-grid">
            <label>Product name<input name="name" required defaultValue={editing === "new" ? "" : editing.name} /></label>
            <label>Category<select name="category" defaultValue={editing === "new" ? "CPU" : editing.category}>{["CPU", "GPU", "Motherboard", "RAM", "CPU Cooler", "Case Fan", "Casing", "PSU", "Monitor", "Prebuilt PC"].map((category) => <option key={category}>{category}</option>)}</select></label>
            <label>Base price<input name="price" required type="number" min="0" defaultValue={editing === "new" ? "" : editing.price} /></label>
            <label>Stock quantity<input name="stock" required type="number" min="0" value={stockDraft} onChange={(event) => setStockDraft(Math.max(0, Number(event.target.value)))} /></label>
            <label>Discount %<input name="discount" type="number" min="0" max="90" defaultValue={editing === "new" ? 0 : editing.discount} /></label>
            <div className="stock-preview"><span>Automatic stock status</span><strong className={stockDraft === 0 ? "stock-out-admin" : "stock-ok"}>{stockDraft === 0 ? "Out of Stock" : "In Stock"}</strong><small>{stockDraft} units available</small></div>
            <label className="wide">Description<textarea name="description" required defaultValue={editing === "new" ? "" : editing.description} /></label>
            <label>Spec key<input placeholder="e.g. Memory" /></label><label>Spec value<input placeholder="e.g. 16GB GDDR6X" /></label>
            <label>Spec key<input placeholder="e.g. Boost clock" /></label><label>Spec value<input placeholder="e.g. 2.55 GHz" /></label>
          </div>
          <Button type="submit"><Save />{editing === "new" ? "Create product" : "Save changes"}</Button>
        </form>
      </div>}
      {selectedOrder && <OrderDetails order={selectedOrder} close={() => setSelectedOrder(null)} />}
      {customRange && <div className="admin-modal-layer" onMouseDown={() => setCustomRange(false)}><div className="date-range-modal" onMouseDown={(event) => event.stopPropagation()}><div><span className="mono">CUSTOM DATE RANGE</span><button onClick={() => setCustomRange(false)}><X /></button></div><h2>Choose reporting period</h2><label>Start date<input type="date" defaultValue="2026-03-01" /></label><label>End date<input type="date" defaultValue="2026-03-30" /></label><Button onClick={() => { setDateRange("Mar 1 – Mar 30"); setCustomRange(false); }}>Apply date range</Button></div></div>}
    </div>
  );
}

function AdminOrderTable({ orders, onSelect }: { orders: AdminOrder[]; onSelect: (order: AdminOrder) => void }) {
  return <div className="admin-order-table"><div className="order-row order-labels"><span>Order</span><span>Customer</span><span>Fulfillment</span><span>Code / Tracking</span><span>Total</span><span>Status</span></div>{orders.map((order) => <button className="order-row order-row-button" key={order.id} onClick={() => onSelect(order)}><b className="mono">{order.id}</b><span>{order.customer}</span><span className="fulfillment-type">{order.type === "pickup" ? <Store /> : <Truck />}{order.type}</span><strong className="mono">{order.code}</strong><b>{order.total}</b><span className="order-status">{order.status}</span></button>)}</div>;
}

function OrderDetails({ order, close }: { order: AdminOrder; close: () => void }) {
  return <div className="detail-layer" onMouseDown={close}><aside className="order-detail-drawer" onMouseDown={(event) => event.stopPropagation()}><div className="detail-drawer-head"><div><span className="mono">ORDER DETAILS</span><h2>{order.id}</h2></div><button onClick={close}><X /></button></div><div className="detail-block"><span className="mono">CUSTOMER</span><strong>{order.customer}</strong><p>{order.email}</p></div><div className="detail-block"><span className="mono">PURCHASED PARTS & SERVICES</span>{order.items.map((item) => <div className="detail-line" key={item}><Package /><span>{item}</span><Check /></div>)}</div><div className="detail-grid"><div><span>Fulfillment</span><strong>{order.type === "pickup" ? "In-store pickup" : "Home delivery"}</strong><small>{order.code}</small></div><div><span>Payment</span><strong>{order.payment}</strong><small>{order.total}</small></div></div><div className="detail-block"><span className="mono">STATUS & TIMESTAMP</span><span className="order-status">{order.status}</span><p>{order.timestamp}</p></div><Button onClick={close}>Done</Button></aside></div>;
}

function ConsultationAdmin() {
  const [type, setType] = useState<"video" | "store">("video");
  const [date, setDate] = useState("2026-03-18");
  return <div className="dashboard-content"><div className="management-grid"><section className="management-card"><span className="mono">BOOK A CONSULTATION</span><h2>Schedule an expert session</h2><div className="consult-type"><button className={type === "video" ? "active" : ""} onClick={() => setType("video")}><Video /><strong>Online video call</strong><span>Remote advice</span></button><button className={type === "store" ? "active" : ""} onClick={() => setType("store")}><Store /><strong>In-store session</strong><span>Hands-on planning</span></button></div><label className="date-picker-field"><span className="mono">SESSION DATE</span><input type="date" value={date} onChange={(event) => setDate(event.target.value)} /></label><Button>Reserve session <ArrowRight /></Button></section><section className="management-card"><span className="mono">UPCOMING / 03</span><h2>Today&apos;s schedule</h2>{[["9:30 AM", "Maya Ortiz", "Video"], ["1:00 PM", "Noah Williams", "In-store"], ["4:30 PM", "Jamie Lee", "Video"]].map(([time, name, mode]) => <div className="schedule-row" key={time}><b>{time}</b><span>{name}<small>{mode} consultation</small></span><button><MoreVertical /></button></div>)}</section></div></div>;
}

function BannerAdmin() {
  const [enabled, setEnabled] = useState(true);
  const [saved, setSaved] = useState(false);
  return <div className="dashboard-content"><div className="banner-manager"><div className="banner-preview"><img src={heroImage} alt="Homepage hero banner preview" /><div><span className="mono">LIVE PREVIEW</span><h2>POWER, PERFECTED.</h2><p>Precision-selected components. Expert-built systems.</p></div></div><form onSubmit={(event) => { event.preventDefault(); setSaved(true); }}><div className="panel-heading"><div><span className="mono">HOMEPAGE HERO</span><h2>Campaign content</h2></div><label className="toggle-control"><input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} /><span />{enabled ? "Visible" : "Hidden"}</label></div><label className="image-upload"><Upload /><strong>Replace banner image</strong><span>Recommended 2400 × 1200</span><input type="file" accept="image/*" /></label><div className="admin-form-grid"><label>Headline<input defaultValue="Power, perfected." /></label><label>Subheadline<input defaultValue="Precision-selected components." /></label><label className="wide">CTA target link<input defaultValue="/builder" /></label><label className="wide">Placement<select><option>Homepage hero</option><option>GPU category</option><option>Prebuilt PC category</option></select></label></div><Button type="submit">{saved ? <><Check />Campaign saved</> : <><Save />Save campaign</>}</Button></form></div></div>;
}

type PortalTab = "orders" | "history" | "profile" | "addresses" | "payments" | "warranty";

function CustomerPortal() {
  const [tab, setTab] = useState<PortalTab>("orders");
  const [historyOpen, setHistoryOpen] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
  const [saved, setSaved] = useState(false);
  const [claimSent, setClaimSent] = useState(false);
  const customerName = sessionStorage.getItem("simplifyName") || "Alex Morgan";
  const activeOrders = [
    { id: "SPC-24081", title: "Custom Performance Build", state: "Ready for pickup", progress: 100, type: "pickup", date: "Today", image: rigImage },
    { id: "SPC-23994", title: "GeForce RTX 4080 Super", state: "In transit", progress: 72, type: "delivery", date: "Arrives Mar 19", image: hardwareImages.gpu },
    { id: "SRV-10482", title: "Full System Tune-Up", state: "Service in progress", progress: 50, type: "service", date: "Ready Mar 18", image: hardwareImages.cooling },
  ];
  const history = [
    { id: "SPC-23108", date: "Feb 14, 2026", total: "$1,148.00", parts: ["Ryzen 9 9950X", "Samsung 990 Pro 4TB"] },
    { id: "SPC-22671", date: "Dec 02, 2025", total: "$438.00", parts: ["Kraken Elite 360", "Trident Z5 Neo 64GB"] },
    { id: "SRV-08942", date: "Oct 19, 2025", total: "$119.00", parts: ["System Tune-Up Service"] },
  ];
  const orderDetail: AdminOrder = { id: "SPC-24081", customer: customerName, email: "alex@example.com", type: "pickup", code: "CF-95X-2408", total: "$1,783.96", status: "Ready for pickup", payment: "Paid · Visa •4242", timestamp: "Mar 16, 2026 · 10:42 AM", items: ["GeForce RTX 4080 Super", "Ryzen 9 9950X", "In-store assembly"] };
  return (
    <div className="customer-portal">
      <div className="portal-head"><div><span className="eyebrow light"><span /> CUSTOMER PROFILE</span><h1>WELCOME BACK,<br />{customerName.split(" ")[0].toUpperCase()}.</h1></div><div className="portal-user"><span>{customerName.split(" ").map((part) => part[0]).join("").slice(0, 2)}</span><div><strong>{customerName}</strong><small>alex@example.com</small></div><Link to="/login" onClick={() => { sessionStorage.removeItem("simplifyRole"); sessionStorage.removeItem("simplifyName"); window.dispatchEvent(new Event("simplify-auth")); }}>Log out</Link></div></div>
      <nav className="portal-tabs">{([["orders", Package, "Orders & services"], ["history", Receipt, "Transactions"], ["profile", User, "Personal info"], ["addresses", MapPin, "Addresses"], ["payments", CreditCard, "Payments"], ["warranty", ShieldCheck, "Warranty"]] as const).map(([id, Icon, label]) => <button className={tab === id ? "active" : ""} onClick={() => setTab(id)} key={id}><Icon />{label}</button>)}</nav>
      <div className="portal-content">
        {tab === "orders" && <section><div className="portal-section-head"><div><span className="mono">03 ACTIVE</span><h2>Current orders & services</h2></div><Link to="/shop">Continue shopping <ArrowRight /></Link></div>
          <div className="active-order-grid">{activeOrders.map((order) => <article className="active-order-card" key={order.id}><div className="active-order-image"><img src={order.image} alt={order.title} /><span className="mono">{order.id}</span></div><div className="active-order-copy"><div><span className="order-status">{order.state}</span><small>{order.date}</small></div><h3>{order.title}</h3><div className="order-progress"><i><span style={{ width: `${order.progress}%` }} /></i><div><span>Order placed</span><span>{order.type === "pickup" ? "Ready for pickup" : order.type === "delivery" ? "Delivered" : "Service complete"}</span></div></div>{order.type === "pickup" && <div className="pickup-code"><div className="mini-qr">{Array.from({ length: 36 }).map((_, i) => <i className={(i * 5 + i * i) % 4 < 2 ? "on" : ""} key={i} />)}</div><div><span className="mono">STORE PICKUP CODE</span><strong>CF-95X-2408</strong><small>Show this code at the service desk</small></div></div>}<button onClick={() => setSelectedOrder({ ...orderDetail, id: order.id, status: order.state, items: [order.title] })}>View order details <ChevronRight /></button></div></article>)}</div>
        </section>}
        {tab === "history" && <section className="history-section"><div className="portal-section-head"><div><span className="mono">ACCOUNT HISTORY</span><h2>Past transactions & invoices</h2></div><button>Download all invoices <Download /></button></div>
          <div className="history-list">{history.map((order) => <div className={`history-order ${historyOpen === order.id ? "open" : ""}`} key={order.id}><button onClick={() => setHistoryOpen(historyOpen === order.id ? null : order.id)}><span className="mono">{order.id}</span><span>{order.date}</span><strong>{order.parts[0]}{order.parts.length > 1 ? ` +${order.parts.length - 1} item` : ""}</strong><b>{order.total}</b><ChevronDown /></button>{historyOpen === order.id && <div className="invoice-detail"><span>Invoice breakdown</span>{order.parts.map((part, index) => <div key={part}><span>{part}</span><b>{index === order.parts.length - 1 ? order.total : "Included"}</b></div>)}<div className="invoice-actions"><button>Download invoice <Receipt /></button><Button>Reorder items <ShoppingBag /></Button></div></div>}</div>)}</div>
        </section>}
        {tab === "profile" && <PortalForm kicker="PERSONAL INFO" title="Profile & security" onSave={() => setSaved(true)} saved={saved}><label>Full name<input defaultValue={customerName} /></label><label>Phone number<input defaultValue="+1 (555) 014-8820" /></label><label>Email address<input type="email" defaultValue="alex@example.com" /></label><label>Current password<input type="password" placeholder="Required to change password" /></label><label>New password<input type="password" placeholder="At least 8 characters" /></label></PortalForm>}
        {tab === "addresses" && <section><div className="portal-section-head"><div><span className="mono">ADDRESS BOOK</span><h2>Shipping & billing</h2></div><button><Plus />Add address</button></div><div className="address-grid"><article><span className="default-badge">DEFAULT SHIPPING</span><h3>Home</h3><p>123 Technology Drive<br />Austin, TX 78701</p><div><button>Edit</button><button>Set as billing</button></div></article><article><span>BILLING</span><h3>Studio</h3><p>88 Circuit Avenue<br />Austin, TX 78704</p><div><button>Edit</button><button>Set as default</button></div></article><article className="address-add"><Plus /><strong>Add another address</strong><span>Street, city and ZIP code</span></article></div></section>}
        {tab === "payments" && <section><div className="portal-section-head"><div><span className="mono">SECURE PAYMENT VAULT</span><h2>Saved payment methods</h2></div><button><Plus />Add payment method</button></div><div className="payment-methods"><article><CreditCard /><span><strong>Visa ending in 4242</strong><small>Expires 08 / 28 · Default</small></span><button><MoreVertical /></button></article><article><Wallet /><span><strong>Digital wallet</strong><small>alex@example.com · Connected</small></span><button>Disconnect</button></article></div></section>}
        {tab === "warranty" && <section className="warranty-portal"><div className="portal-section-head"><div><span className="mono">HARDWARE COVERAGE</span><h2>Warranty claims</h2></div><span className="claim-status">{claimSent ? "Pending Review" : "No open claims"}</span></div><div className="warranty-layout"><form onSubmit={(event) => { event.preventDefault(); setClaimSent(true); }}><label>Purchased item<select required><option value="">Select an eligible item</option><option>GeForce RTX 4080 Super</option><option>Ryzen 9 9950X</option><option>Apex X7 Prebuilt PC</option></select></label><label>Serial number / order reference<input required placeholder="SN-0000 or SPC-00000" /></label><label>Describe the hardware issue<textarea required placeholder="Include symptoms, when the issue began, and troubleshooting attempted." /></label><label className="claim-upload"><Upload /><strong>Upload diagnostic images or video</strong><input type="file" accept="image/*,video/*" multiple /></label><Button type="submit">Submit warranty claim <ArrowRight /></Button></form><aside><ShieldCheck /><h3>3-year system coverage</h3><p>Claims are reviewed by a hardware specialist within one business day.</p><div><span>1</span>Pending review</div><div><span>2</span>Approved</div><div><span>3</span>Part replacement in progress</div></aside></div></section>}
      </div>
      {selectedOrder && <OrderDetails order={selectedOrder} close={() => setSelectedOrder(null)} />}
    </div>
  );
}

function PortalForm({ kicker, title, children, onSave, saved }: { kicker: string; title: string; children: React.ReactNode; onSave: () => void; saved: boolean }) {
  return <section><div className="portal-section-head"><div><span className="mono">{kicker}</span><h2>{title}</h2></div></div><form className="portal-form" onSubmit={(event) => { event.preventDefault(); onSave(); }}>{children}<Button type="submit">{saved ? <><Check />Changes saved</> : <><Save />Save changes</>}</Button></form></section>;
}

function Checkout() {
  const [fulfillment, setFulfillment] = useState<"delivery" | "pickup">("delivery");
  const [payment, setPayment] = useState<"card" | "wallet" | "store">("card");
  const [complete, setComplete] = useState(false);
  const items = [
    { name: "GeForce RTX 4080 Super", spec: "16GB GDDR6X", price: 999, image: hardwareImages.gpu },
    { name: "Ryzen 9 9950X", spec: "16-Core / AM5", price: 649, image: hardwareImages.cpu },
  ];
  if (complete) return <div className="order-complete"><span className="order-check"><Check /></span><span className="eyebrow light"><span /> ORDER CONFIRMED</span><h1>YOUR BUILD<br />STARTS HERE.</h1><p>Confirmation <b className="mono">SPC-24081</b> has been sent to your email. We&apos;ll notify you as soon as your order is ready.</p><div><Link to="/" className="btn btn-light">Return home</Link><Link to="/expert" className="btn btn-outline">Talk to an expert</Link></div></div>;
  return (
    <div className="checkout-page">
      <div className="checkout-top"><div><span className="eyebrow light"><span /> SECURE CHECKOUT</span><h1>COMPLETE<br />YOUR ORDER.</h1></div><div className="checkout-steps"><span className="active">01 Fulfillment</span><i /><span className="active">02 Payment</span><i /><span>03 Complete</span></div></div>
      <div className="checkout-layout">
        <div className="checkout-forms">
          <section className="checkout-section"><div className="checkout-section-title"><span className="mono">01</span><div><h2>Fulfillment</h2><p>How would you like to receive your order?</p></div></div>
            <div className="fulfillment-options">
              <button className={fulfillment === "delivery" ? "active" : ""} onClick={() => { setFulfillment("delivery"); if (payment === "store") setPayment("card"); }}><Truck /><div><strong>Home delivery</strong><span>2–4 business days · Free</span></div><span className="radio">{fulfillment === "delivery" && <span />}</span></button>
              <button className={fulfillment === "pickup" ? "active" : ""} onClick={() => setFulfillment("pickup")}><Store /><div><strong>In-store pickup</strong><span>Ready in approximately 2 hours</span></div><span className="radio">{fulfillment === "pickup" && <span />}</span></button>
            </div>
            {fulfillment === "delivery" ? <div className="checkout-fields"><label>Full name<input placeholder="Alex Morgan" /></label><label>Email address<input type="email" placeholder="alex@example.com" /></label><label className="wide">Street address<input placeholder="123 Technology Drive" /></label><label>City<input placeholder="Austin" /></label><label>ZIP code<input placeholder="78701" /></label></div> : <div className="pickup-panel"><MapPin /><div><strong>simplify.pc Downtown</strong><span>1450 Market Street · Open today until 8 PM</span><small className="mono">PICKUP CODE GENERATED AFTER PAYMENT</small></div></div>}
          </section>
          <section className="checkout-section"><div className="checkout-section-title"><span className="mono">02</span><div><h2>Payment</h2><p>All transactions are encrypted and secure.</p></div></div>
            <div className="payment-tabs">
              <button className={payment === "card" ? "active" : ""} onClick={() => setPayment("card")}><CreditCard />Card</button>
              <button className={payment === "wallet" ? "active" : ""} onClick={() => setPayment("wallet")}><Wallet />Digital wallet</button>
              {fulfillment === "pickup" && <button className={payment === "store" ? "active" : ""} onClick={() => setPayment("store")}><Store />Pay at store</button>}
            </div>
            {payment === "card" && <div className="checkout-fields card-fields"><label className="wide">Card number<input placeholder="0000 0000 0000 0000" /></label><label>Expiry date<input placeholder="MM / YY" /></label><label>Security code<input placeholder="CVC" /></label><label className="wide">Name on card<input placeholder="Alex Morgan" /></label></div>}
            {payment === "wallet" && <div className="wallet-options"><button>Pay</button><button>G Pay</button><p>You&apos;ll be redirected to your selected wallet to authorize payment.</p></div>}
            {payment === "store" && <div className="pay-store-panel"><Store /><div><strong>Reserve now, pay at pickup</strong><p>Your items will be held for 24 hours. Bring your pickup code and a valid photo ID.</p></div></div>}
          </section>
        </div>
        <aside className="checkout-summary"><span className="mono">ORDER SUMMARY</span><h2>2 ITEMS</h2>
          <div className="summary-items">{items.map((item) => <div key={item.name}><img src={item.image} alt={item.name} /><div><strong>{item.name}</strong><span>{item.spec} · Qty 1</span></div><b>${item.price.toLocaleString()}</b></div>)}</div>
          <div className="summary-costs"><div><span>Subtotal</span><b>$1,648.00</b></div><div><span>Shipping</span><b>{fulfillment === "delivery" ? "FREE" : "PICKUP"}</b></div><div><span>Estimated tax</span><b>$135.96</b></div><div className="summary-total"><span>Total</span><strong>$1,783.96</strong></div></div>
          <Button onClick={() => setComplete(true)}>{payment === "store" ? "Reserve order" : "Complete order"} <ArrowRight /></Button>
          <p className="secure-note"><ShieldCheck /> Secure 256-bit encrypted checkout</p>
        </aside>
      </div>
    </div>
  );
}

function NotFound() {
  return <div className="diagnostic-result"><span className="mono">ERROR 404</span><h1>PAGE NOT<br />INSTALLED.</h1><Link to="/" className="btn btn-dark">Return home</Link></div>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "product/:id", Component: ProductDetail },
      { path: "prebuilt", Component: PrebuiltCatalog },
      { path: "prebuilt/:id", Component: PrebuiltDetail },
      { path: "builder", Component: Builder },
      { path: "services", Component: Services },
      { path: "diagnose", Component: Diagnose },
      { path: "expert", Component: ExpertAdvice },
      { path: "community", Component: Community },
      { path: "community/:slug", Component: CommunityThread },
      { path: "checkout", Component: Checkout },
      { path: "login", Component: Login },
      { path: "admin", Component: AdminDashboard },
      { path: "account", Component: CustomerPortal },
      { path: "*", Component: NotFound },
    ],
  },
]);
