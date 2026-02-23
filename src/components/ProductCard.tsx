import { ShoppingCart, Check } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  description: string | null;
  category: string | null;
  stock: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="group fade-in overflow-hidden rounded-xl border bg-card shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="aspect-square overflow-hidden bg-secondary">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground">
            Sem imagem
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        {product.category && (
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {product.category}
          </span>
        )}
        <h3 className="font-semibold leading-tight text-card-foreground line-clamp-2">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        )}

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="text-2xl font-bold text-foreground">
              R$ {product.price.toFixed(2).replace(".", ",")}
            </span>
            {product.stock <= 3 && product.stock > 0 && (
              <p className="text-xs text-accent font-medium">Últimas unidades!</p>
            )}
          </div>

          <button
            onClick={handleAdd}
            disabled={product.stock === 0}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              added
                ? "bg-success text-success-foreground scale-95"
                : product.stock === 0
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground hover:opacity-90 active:scale-95"
            }`}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Adicionado
              </>
            ) : product.stock === 0 ? (
              "Esgotado"
            ) : (
              <>
                <ShoppingCart className="h-4 w-4" /> Comprar
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
