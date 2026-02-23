import StoreHeader from "@/components/StoreHeader";
import HeroBanner from "@/components/HeroBanner";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StoreHeader />
      <HeroBanner />
      <ProductGrid />
      <CartDrawer />

      <footer className="border-t bg-card py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 MegaStore. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Index;
