import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Reports = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Submit a UFO Report</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Share your UFO sighting experience with us.
        </p>
      </header>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Report Form</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="date" className="block text-sm font-medium">
                  Date of Sighting
                </label>
                <Input id="date" type="date" {...register("date")} />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium">
                  Location
                </label>
                <Input id="location" {...register("location")} />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium">
                  Description
                </label>
                <Textarea id="description" {...register("description")} />
              </div>
              <Button type="submit">Submit Report</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Reports;