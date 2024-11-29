import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

export function WishForm({ setReload }) {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  async function submitForm(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!formRef.current.name.value || !formRef.current.message.value) {
      alert("please enter your name and message");
      return;
    }
    setPending(true);
    const { error } = await supabase.from("wishes").insert({
      name: formRef.current.name.value,
      message: formRef.current.message.value,
    });
    setPending(false);
    setReload((prev) => !prev);

    if (error) {
      alert(error.message);
      return;
    }

    toast({
      title: "Success!",
      description: "Your birthday wish has been sent!",
    });
  }

  return (
    <form ref={formRef} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email (optional)</Label>
        <Input id="email" name="email" type="email" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          className="min-h-[100px]"
          maxLength={500}
        />
      </div>
      <Button
        className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700"
        onClick={submitForm}
      >
        {pending ? "Sending..." : "Send Birthday Wish"}
      </Button>
    </form>
  );
}
