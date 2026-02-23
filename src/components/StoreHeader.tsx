import { ShoppingCart, Store } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useNavigate } from "react-router-dom";

const StoreHeader = () => {
  const { toggleCart, count, justAdded } = useCartStore();
  const navigate = useNavigate();
  const itemCount = count();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <Store className="h-6 w-6 text-primary" />
          MegaStore
        </button>

        <button
          onClick={toggleCart}
          className="relative rounded-full bg-secondary p-2.5 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ShoppingCart className={`h-5 w-5 ${justAdded ? "cart-bounce" : ""}`} />
          {itemCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default StoreHeader;
