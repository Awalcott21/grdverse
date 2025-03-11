
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsultationHeader from "../components/consultation/ConsultationHeader";
import ConsultationForm from "../components/consultation/ConsultationForm";
import ConsultationBenefits from "../components/consultation/ConsultationBenefits";

const Consultation = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />
      <main className="pt-20">
        <div className="container-padding py-16">
          <div className="max-w-4xl mx-auto">
            <div className="absolute -top-8 left-0 text-sm text-neutral-500 tracking-tight">
              Your AI Website is 5 Days Away
            </div>
            <ConsultationHeader />
            <div className="grid md:grid-cols-2 gap-12">
              <ConsultationForm />
              <ConsultationBenefits />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
