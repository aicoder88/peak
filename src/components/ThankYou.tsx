"use client"

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCTAClick={() => setIsFormOpen(true)} />

      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
                <CheckCircle2 className="h-10 w-10 text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Thank you</h1>
              <p className="text-muted-foreground text-lg mb-8">
                Your request was received. We&apos;ll be in touch within 24 hours.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/">Back to home</Link>
                </Button>
                <Button variant="outline" onClick={() => setIsFormOpen(true)}>
                  Book another consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer onCTAClick={() => setIsFormOpen(true)} />
      <ConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </div>
  );
}

