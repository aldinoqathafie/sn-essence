import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-amber-100 text-gray-800 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Mengapa Memilih SN Essence?</h2>
      <p className="max-w-3xl mx-auto text-lg mb-8">
        Kami menghadirkan essence berkualitas tinggi dengan bahan alami pilihan, diformulasikan khusus untuk meningkatkan hasil pancing Anda.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-bold text-xl mb-2 text-amber-800">Kualitas Terbaik</h3>
          <p>Bahan alami dan formula rahasia terbukti ampuh.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-bold text-xl mb-2 text-amber-800">Diuji Pemancing</h3>
          <p>Digunakan oleh komunitas dan juara lomba mancing di Indonesia.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl">
          <h3 className="font-bold text-xl mb-2 text-amber-800">Aroma Tahan Lama</h3>
          <p>Meningkatkan daya tarik ikan bahkan di air keruh.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
