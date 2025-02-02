"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lock, DollarSign, Mail } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold text-gray-900">Payment</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Multiple convenient payment options available
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <div className="w-full lg:w-2/3">
            <Card>
              <CardContent className="p-6 pt-6">
                <div className="space-y-4">
                  {/* Secure Online Payment */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Lock className="h-5 w-5 text-blue-600" />
                    <span>
                      Secure online payment through our{" "}
                      <a
                        href="https://checkout.square.site/merchant/7GXA474BJ29XX/checkout/FOKUT5A42GOXWTI4JYONIVU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        payment portal
                      </a>
                    </span>
                  </div>

                  {/* Zelle Payments */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <span>
                      Zelle payments accepted at:{" "}
                      <a
                        href="https://www.zellepay.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        JSDInc@aol.com
                      </a>
                    </span>
                  </div>

                  {/* Mail Checks */}
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>Mail checks to: P.O. Box 26, Baldwin, MD 21013</span>
                  </div>

                  {/* Payment Instructions */}
                  <div className="bg-blue-50 p-4 rounded-md text-sm text-blue-700">
                    Please reference our invoice number (or &quot;deposit&quot;) and the property address
                    with your payment.
                  </div>

                  {/* Pay Now Button */}
                  <div className="pt-4 flex justify-center">
                    <Button className="w-fit" size="lg">
                      <a
                        href="https://checkout.square.site/merchant/7GXA474BJ29XX/checkout/FOKUT5A42GOXWTI4JYONIVU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Pay Now
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;