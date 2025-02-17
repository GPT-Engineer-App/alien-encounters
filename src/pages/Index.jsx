import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">UFO Sightings USA</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore the latest UFO sightings and reports from across the USA.
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Recent Sightings</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <h3 className="text-xl font-semibold">Bright Light in the Sky</h3>
                <p className="text-muted-foreground">Date: 2023-10-01</p>
                <p className="mt-1">
                  A bright light was seen moving rapidly across the night sky in
                  California.
                </p>
              </li>
              <Separator />
              <li>
                <h3 className="text-xl font-semibold">Unidentified Flying Object</h3>
                <p className="text-muted-foreground">Date: 2023-09-25</p>
                <p className="mt-1">
                  An unidentified flying object was reported hovering over a field
                  in Texas.
                </p>
              </li>
              <Separator />
              <li>
                <h3 className="text-xl font-semibold">Strange Lights Formation</h3>
                <p className="text-muted-foreground">Date: 2023-09-20</p>
                <p className="mt-1">
                  Multiple strange lights were seen forming a pattern in the sky
                  over Nevada.
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-muted-foreground">
        <p>Contact us: info@ufosightingsusa.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default Index;