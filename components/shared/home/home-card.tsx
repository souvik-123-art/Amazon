import { Card, CardContent } from "@/components/ui/card";

type CardItem = {
  title: string;
  link: { text: string; href: string };
  items: {
    name: string;
    href: string;
    items?: string[];
    image: string;
  }[];
};

export const HomeCard = ({ cards }: { cards: CardItem[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4">
      {cards.map((card) => (
        <Card key={card.title} className="rounded-none flex flex-col">
          <CardContent className="p-4 flex-1">
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
