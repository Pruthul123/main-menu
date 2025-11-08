import { Card } from "@/components/ui/card";

interface MenuItem {
  name: string;
  price: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  columns?: number;
}

const MenuSection = ({ title, items, columns = 2 }: MenuSectionProps) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2">
        {title}
      </h2>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-3`}>
        {items.map((item, index) => (
          <Card key={index} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center">
              <span className="font-medium text-foreground">{item.name}</span>
              <span className="text-primary font-bold">{item.price}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
