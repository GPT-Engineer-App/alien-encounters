import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">About UFO Sightings USA</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Learn more about our mission and the team behind this website.
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our mission is to provide a platform for people to share and explore
              UFO sightings across the USA. We aim to gather and present data in a
              way that is accessible and informative for everyone.
            </p>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>The Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We are a group of enthusiasts dedicated to uncovering the truth
              behind UFO sightings. Our team works tirelessly to verify reports
              and provide accurate information to the public.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;