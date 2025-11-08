import Header from "@/components/Header";
import MenuSection from "@/components/MenuSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const specialItem = [
    { name: "Buttermilk (500gm)", price: "18" },
    { name: "Mango Ras", price: "-" },
  ];
  const mainMenuItems = [
    { name: "Kesar Peda", price: "₹330/kg" },
    { name: "Malaai Peda", price: "₹330/kg" },
    { name: "Rajvadi Peda", price: "₹330/kg" },
    { name: "Fensi Kesar Peda", price: "₹330/kg" },
    { name: "Madhav Peda", price: "₹330/kg" },
    { name: "Thabadi Peda", price: "₹350/kg" },
    { name: "Dudh No Halvo", price: "₹330/kg" },
    { name: "Mohanthal", price: "₹330/kg" },
    { name: "Toparapak", price: "₹330/kg" },
    { name: "Churama Ladu", price: "₹330/kg" },
    { name: "Besan Ladu", price: "₹330/kg" },
    { name: "Motichur Ladu", price: "₹190/kg" },
    { name: "Bundi Ladu", price: "₹190/kg" },
  ];

  const premiumItems = [
    { name: "Kaju Katari", price: "₹710/kg" },
    { name: "Kesar Katari", price: "₹730/kg" },
    { name: "Pista Roll", price: "₹750/kg" },
    { name: "Anjir Roll", price: "₹750/kg" },
    { name: "Anjir Patra", price: "₹750/kg" },
    { name: "Dryfruit Katari", price: "₹750/kg" },
  ];

  const barfiItems = [
    { name: "Malaai Barfi", price: "₹370/kg" },
    { name: "Chocolate Barfi", price: "₹370/kg" },
    { name: "Kesar Barfi", price: "₹370/kg" },
    { name: "Three In One Barfi", price: "₹370/kg" },
    { name: "Malaai Mataka", price: "₹390/kg" },
    { name: "Malaai Toss", price: "₹390/kg" },
    { name: "Malaai Surajmukhi", price: "₹390/kg" },
    { name: "Gulakan Katori", price: "₹390/kg" },
    { name: "Mava Roll", price: "₹390/kg" },
  ];

  const specialItems = [
    { name: "Gulab Jambu", price: "₹10/pc" },
    { name: "Kalajam", price: "₹10/pc" },
    { name: "Basundi", price: "₹230" },
  ];

  const shreekhands = [
    { name: "American Nuts", price: "₹220" },
    { name: "Kajudraks", price: "₹220" },
    { name: "Kesar Rajbhog", price: "₹220" },
    { name: "SP. Madhav", price: "₹220" },
    { name: "Mango", price: "₹210" },
    { name: "Green Pista", price: "₹210" },
    { name: "Kaju Anjir", price: "₹210" },
    { name: "Kesar Pista", price: "₹210" },
  ];

  const drinks = [
    { name: "Kesar Lassi", price: "₹100" },
    { name: "Mango Lassi", price: "₹100" },
    { name: "Gulab Lassi", price: "₹100" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome to Madhav Sweets
          </h2>
          <p className="text-muted-foreground text-lg">
            Ashvinbhai Patel | All sweets at wholesale prices
          </p>
        </div>

        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid w-full grid-cols-1 mb-8">
            <TabsTrigger value="main">Main Menu</TabsTrigger>
          </TabsList>
          
          <TabsContent value="main" className="space-y-8">
            <MenuSection title="Traditional Sweets" items={mainMenuItems} columns={2} />
            <MenuSection title="Premium Sweets" items={premiumItems} columns={2} />
            <MenuSection title="Barfi Collection" items={barfiItems} columns={2} />
            <MenuSection title="Special Items" items={specialItems} columns={2} />
            <MenuSection title="Shreekhand Varieties" items={shreekhands} columns={2} />
            <MenuSection title="Drinks & Beverages" items={drinks} columns={2} />

            <p className="text-muted-foreground text-sm mt-4 text-center">
              નોંધ: ફેન્સી બોક્સમાં અને ગિફ્ટ પેકિંગ કરી આપવામાં આવશે. તેનો ચાર્જ અલગ રહેશે.
            </p>
            <p className="text-muted-foreground text-sm text-center">
              (Note: Fancy box and gift packing available at additional charges)
            </p>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center bg-card rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-foreground mb-2">Contact Us</h3>
          <p className="text-muted-foreground mb-4">For orders and inquiries</p>
          <a 
            href="tel:8128151100" 
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            📞 Call: 8128151100
          </a>
          <p className="text-sm text-muted-foreground mt-4">Ashvinbhai Patel</p>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Madhav Sweets. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
