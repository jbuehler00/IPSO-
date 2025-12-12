import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";

const serifFont = { fontFamily: "'Playfair Display', serif" };

const signupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  role: z.string().optional(),
  company: z.string().optional(),
  companySize: z.string().optional(),
  priceRange: z.string().optional(),
});

type SignupFormData = z.infer<typeof signupSchema>;

interface SignupFormProps {
  onSubmit?: (data: SignupFormData) => Promise<void>;
}

export default function SignupForm({ onSubmit }: SignupFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "",
      company: "",
      companySize: "",
      priceRange: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: SignupFormData) => {
      if (onSubmit) {
        await onSubmit(data);
        return;
      }
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSuccess(true);
      setErrorMessage(null);
    },
    onError: (error: Error) => {
      setErrorMessage(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleFormSubmit = async (data: SignupFormData) => {
    setErrorMessage(null);
    mutation.mutate(data);
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-md mx-auto p-8 md:p-10 shadow-lg" style={serifFont}>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-success-title">
            You're on the list!
          </h3>
          <p className="text-muted-foreground" data-testid="text-success-message">
            Thank you for joining our waitlist. We'll be in touch soon with updates and early access details.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6 md:p-10 shadow-lg" style={serifFont}>
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-1">Get Early Access to IPSO</h3>
        <p className="text-sm text-muted-foreground">People-first training, culture intelligence, and leadership support—built for the future of hospitality.</p>
      </div>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your full name"
            {...register("name")}
            className="h-12"
            data-testid="input-name"
          />
          {errors.name && (
            <p className="text-sm text-destructive" data-testid="error-name">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className="h-12"
            data-testid="input-email"
          />
          {errors.email && (
            <p className="text-sm text-destructive" data-testid="error-email">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="role" className="text-sm font-medium">
            Role <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input
            id="role"
            type="text"
            placeholder="e.g. Hotel Manager, Training Director"
            {...register("role")}
            className="h-12"
            data-testid="input-role"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-medium">
            Company <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Your company name"
            {...register("company")}
            className="h-12"
            data-testid="input-company"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="companySize" className="text-sm font-medium">
            Company Size <span className="text-muted-foreground text-xs">(optional)</span>
          </Label>
          <Select onValueChange={(value) => setValue("companySize", value)}>
            <SelectTrigger className="h-12" data-testid="select-company-size">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-30">11-30 employees</SelectItem>
              <SelectItem value="31-60">31-60 employees</SelectItem>
              <SelectItem value="61-100">61-100 employees</SelectItem>
              <SelectItem value="100+">100+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priceRange" className="text-sm font-medium">
            What price range would you consider reasonable for a tool like this?
          </Label>
          <Select onValueChange={(value) => setValue("priceRange", value)}>
            <SelectTrigger className="h-12" data-testid="select-price-range">
              <SelectValue placeholder="Select a price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="79-99">$79–$99/mo</SelectItem>
              <SelectItem value="99-149">$99–$149/mo</SelectItem>
              <SelectItem value="149-199">$149–$199/mo</SelectItem>
              <SelectItem value="200-plus">$200+/mo</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {errorMessage && (
          <p className="text-sm text-destructive text-center" data-testid="error-form">
            {errorMessage}
          </p>
        )}

        <Button
          type="submit"
          className="w-full h-14 text-base font-semibold mt-6"
          disabled={mutation.isPending}
          data-testid="button-submit"
        >
          {mutation.isPending ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Joining...
            </>
          ) : (
            "Join the Waitlist"
          )}
        </Button>
      </form>
    </Card>
  );
}
