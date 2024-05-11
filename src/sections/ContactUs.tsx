import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactUsPage() {
  const t = useTranslations("Index");
  return (
    <div className="max-w-[90%] md:max-w-[50%]  mx-auto py-32">
       <h1 className="max-w-xl text-3xl md:text-5xl font-bold text-center mb-20 mx-auto">
        {t('contactUs.title')}
      </h1>
    <Card className="shadow-sm shadow-gray/50 border-0 pt-10">
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">
        {t('contactUs.name')}

            </Label>
            <Input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">{t('contactUs.email')}</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="message">{t('contactUs.message')}</Label>
            <Textarea id="message" placeholder="Enter your message" rows={5} />
          </div>
          <Button type="submit" className="w-fit mx-auto bg-green text-white px-6 py-3 rounded-md hover:bg-green/90 transition-colors duration-300">
            {t('contactUs.submit')}
          </Button>
        </div>
      </CardContent>
    </Card>
    </div>
  );
}