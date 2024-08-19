const medicineData = [
    {
      "name": "Paracetamol",
      "description": "Used to treat pain and fever. Commonly used for headaches, muscle aches, and colds.",
      "max_dosage": "4 grams per day",
      "ingredients": {
        "Paracetamol": "0.5 g",
        "Sodium Metabisulfite": "0.01 g",
        "Pregelatinized Starch": "0.2 g"
      }
    },
    {
      "name": "Amoxicillin",
      "description": "An antibiotic used to treat bacterial infections such as pneumonia, bronchitis, and infections of the ear, nose, throat, skin, and urinary tract.",
      "max_dosage": "3 grams per day",
      "ingredients": {
        "Amoxicillin Trihydrate": "0.5 g",
        "Magnesium Stearate": "0.02 g",
        "Colloidal Silicon Dioxide": "0.01 g"
      }
    },
    {
      "name": "Ibuprofen",
      "description": "Used to reduce fever and treat pain or inflammation. Commonly used for headaches, toothaches, arthritis, and menstrual cramps.",
      "max_dosage": "1.2 grams per day",
      "ingredients": {
        "Ibuprofen": "0.2 g",
        "Corn Starch": "0.1 g",
        "Stearic Acid": "0.02 g"
      }
    },
    {
      "name": "Cetirizine",
      "description": "An antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, and sneezing.",
      "max_dosage": "10 mg per day",
      "ingredients": {
        "Cetirizine Dihydrochloride": "0.01 g",
        "Lactose Monohydrate": "0.05 g",
        "Microcrystalline Cellulose": "0.2 g"
      }
    },
    {
      "name": "Omeprazole",
      "description": "Used to treat gastroesophageal reflux disease (GERD) and other conditions caused by excess stomach acid.",
      "max_dosage": "40 mg per day",
      "ingredients": {
        "Omeprazole": "0.02 g",
        "Hydroxypropyl Cellulose": "0.01 g",
        "Magnesium Hydroxide": "0.1 g"
      }
    },
    {
      "name": "Metformin",
      "description": "Used to improve blood sugar control in people with type 2 diabetes.",
      "max_dosage": "2 grams per day",
      "ingredients": {
        "Metformin Hydrochloride": "0.5 g",
        "Povidone": "0.02 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Losartan",
      "description": "Used to treat high blood pressure (hypertension) and to protect the kidneys from damage due to diabetes.",
      "max_dosage": "100 mg per day",
      "ingredients": {
        "Losartan Potassium": "0.05 g",
        "Microcrystalline Cellulose": "0.15 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Simvastatin",
      "description": "Used to lower cholesterol and triglycerides (types of fat) in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
        "Simvastatin": "0.02 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Atorvastatin",
      "description": "Used to lower cholesterol and triglyceride levels in the blood.",
      "max_dosage": "80 mg per day",
      "ingredients": {
        "Atorvastatin Calcium": "0.01 g",
        "Lactose Monohydrate": "0.2 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Amlodipine",
      "description": "Used to treat high blood pressure (hypertension) and chest pain (angina).",
      "max_dosage": "10 mg per day",
      "ingredients": {
        "Amlodipine Besylate": "0.005 g",
        "Microcrystalline Cellulose": "0.1 g",
        "Calcium Phosphate": "0.2 g"
      }
    },
    {
      "name": "Gabapentin",
      "description": "Used to treat nerve pain caused by shingles or herpes virus.",
      "max_dosage": "3.6 grams per day",
      "ingredients": {
        "Gabapentin": "0.3 g",
        "Lactose Monohydrate": "0.1 g",
        "Talc": "0.015 g"
      }
    },
    {
      "name": "Levothyroxine",
      "description": "Used to treat hypothyroidism (low thyroid hormone).",
      "max_dosage": "200 mcg per day",
      "ingredients": {
        "Levothyroxine Sodium": "0.1 mg",
        "Calcium Phosphate": "0.2 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Albuterol",
      "description": "Used to treat or prevent bronchospasm in people with reversible obstructive airway disease.",
      "max_dosage": "32 mg per day",
      "ingredients": {
        "Albuterol Sulfate": "0.2 mg",
        "Lactose Monohydrate": "0.05 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Pantoprazole",
      "description": "Used to treat gastroesophageal reflux disease (GERD) and other conditions involving excessive stomach acid.",
      "max_dosage": "40 mg per day",
      "ingredients": {
        "Pantoprazole Sodium": "0.04 g",
        "Mannitol": "0.2 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Clopidogrel",
      "description": "Used to prevent blood clots in people with heart disease, recent stroke, or blood circulation disorder.",
      "max_dosage": "75 mg per day",
      "ingredients": {
        "Clopidogrel Bisulfate": "0.075 g",
        "Hydroxypropyl Cellulose": "0.02 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Warfarin",
      "description": "Used to treat or prevent blood clots in veins or arteries.",
      "max_dosage": "10 mg per day",
      "ingredients": {
        "Warfarin Sodium": "0.01 g",
        "Lactose Monohydrate": "0.05 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Insulin Glargine",
      "description": "Used to improve blood sugar control in people with diabetes mellitus.",
      "max_dosage": "As prescribed by a healthcare provider",
      "ingredients": {
        "Insulin Glargine": "100 IU/mL",
        "Zinc": "0.005 mg",
        "Glycerol": "2.7 mg"
      }
    },
    {
      "name": "Metoprolol",
      "description": "Used to treat angina (chest pain) and hypertension (high blood pressure).",
      "max_dosage": "400 mg per day",
      "ingredients": {
        "Metoprolol Tartrate": "0.05 g",
        "Silicon Dioxide": "0.01 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Prednisone",
      "description": "Used to treat inflammatory conditions such as arthritis, lupus, and allergies.",
      "max_dosage": "80 mg per day",
      "ingredients": {
        "Prednisone": "0.005 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Hydrochlorothiazide",
      "description": "Used to treat high blood pressure and fluid retention (edema).",
      "max_dosage": "50 mg per day",
      "ingredients": {
        "Hydrochlorothiazide": "0.025 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Lisinopril",
      "description": "Used to treat high blood pressure (hypertension) and heart failure.",
      "max_dosage": "40 mg per day",
      "ingredients": {
        "Lisinopril": "0.02 g",
        "Calcium Phosphate": "0.2 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Cholecalciferol",
      "description": "A form of vitamin D used to treat or prevent vitamin D deficiency.",
      "max_dosage": "4000 IU per day",
      "ingredients": {
        "Cholecalciferol (Vitamin D3)": "0.25 mcg",
        "Sucrose": "0.1 g",
        "Talc": "0.015 g"
      }
    },
    {
      "name": "Rosuvastatin",
      "description": "Used to lower cholesterol and triglycerides in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
        "Rosuvastatin Calcium": "0.01 g",
        "Microcrystalline Cellulose": "0.2 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Mirtazapine",
      "description": "An antidepressant used to treat major depressive disorder.",
      "max_dosage": "45 mg per day",
      "ingredients": {
        "Mirtazapine": "0.03 g",
        "Lactose Monohydrate": "0.2 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Methotrexate",
      "description": "Used to treat certain types of cancer, severe psoriasis, and rheumatoid arthritis.",
      "max_dosage": "25 mg per week",
      "ingredients": {
        "Methotrexate Sodium": "0.02 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Atenolol",
      "description": "Used to treat high blood pressure (hypertension) and angina (chest pain).",
      "max_dosage": "100 mg per day",
      "ingredients": {
        "Atenolol": "0.05 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Risperidone",
      "description": "Used to treat schizophrenia, bipolar disorder, and irritability associated with autistic disorder.",
      "max_dosage": "16 mg per day",
      "ingredients": {
        "Risperidone": "0.002 g",
        "Lactose Monohydrate": "0.1 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Hydrocodone",
      "description": "An opioid used to relieve moderate to severe pain.",
      "max_dosage": "80 mg per day",
      "ingredients": {
        "Hydrocodone Bitartrate": "0.01 g",
        "Acetaminophen": "0.3 g",
        "Magnesium Stearate": "0.02 g"
      }
    },
    {
      "name": "Loratadine",
      "description": "An antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itchy eyes.",
      "max_dosage": "10 mg per day",
      "ingredients": {
        "Loratadine": "0.01 g",
        "Lactose Monohydrate": "0.05 g",
        "Corn Starch": "0.1 g"
      }
    },
    {
      "name": "Doxycycline",
      "description": "An antibiotic used to treat bacterial infections, including pneumonia and acne.",
      "max_dosage": "200 mg per day",
      "ingredients": {
        "Doxycycline Hyclate": "0.1 g",
        "Microcrystalline Cellulose": "0.15 g",
        "Magnesium Stearate": "0.02 g"
      }
    },
    {
      "name": "Meloxicam",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammation.",
      "max_dosage": "15 mg per day",
      "ingredients": {
        "Meloxicam": "0.015 g",
        "Lactose Anhydrous": "0.1 g",
        "Povidone": "0.02 g"
      }
    },
    {
      "name": "Escitalopram",
      "description": "An antidepressant used to treat anxiety and major depressive disorder.",
      "max_dosage": "20 mg per day",
      "ingredients": {
        "Escitalopram Oxalate": "0.02 g",
        "Croscarmellose Sodium": "0.01 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Furosemide",
      "description": "A diuretic used to reduce fluid retention and treat high blood pressure.",
      "max_dosage": "80 mg per day",
      "ingredients": {
        "Furosemide": "0.04 g",
        "Lactose Monohydrate": "0.1 g",
        "Microcrystalline Cellulose": "0.2 g"
      }
    },
    {
      "name": "Gabapentin",
      "description": "Used to treat nerve pain and seizures.",
      "max_dosage": "3.6 grams per day",
      "ingredients": {
        "Gabapentin": "0.3 g",
        "Talc": "0.015 g",
        "Magnesium Stearate": "0.01 g"
      }
    },
    {
      "name": "Levocetirizine",
      "description": "An antihistamine used to relieve allergy symptoms such as itchy eyes, runny nose, and sneezing.",
      "max_dosage": "5 mg per day",
      "ingredients": {
        "Levocetirizine Dihydrochloride": "0.005 g",
        "Lactose Monohydrate": "0.05 g",
        "Microcrystalline Cellulose": "0.1 g"
      }
    },
    {
      "name": "Carvedilol",
      "description": "Used to treat high blood pressure and heart failure.",
      "max_dosage": "50 mg per day",
      "ingredients": {
        "Carvedilol Phosphate": "0.025 g",
        "Colloidal Silicon Dioxide": "0.01 g",
        "Povidone": "0.02 g"
      }
    },
    {
      "name": "Tamsulosin",
      "description": "Used to treat symptoms of an enlarged prostate (benign prostatic hyperplasia).",
      "max_dosage": "0.8 mg per day",
      "ingredients": {
        "Tamsulosin Hydrochloride": "0.8 mg",
        "Microcrystalline Cellulose": "0.1 g",
        "Magnesium Stearate": "0.015 g"
      }
    },
    {
      "name": "Azithromycin",
      "description": "An antibiotic used to treat a wide variety of bacterial infections, including respiratory infections, skin infections, ear infections, and sexually transmitted diseases.",
      "max_dosage": "1.5 grams per day",
      "ingredients": {
          "Azithromycin Dihydrate": "0.5 g",
          "Sodium Phosphate": "0.03 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Esomeprazole",
      "description": "Used to treat certain stomach and esophagus problems (such as acid reflux). It works by decreasing the amount of acid your stomach makes.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Esomeprazole Magnesium": "0.02 g",
          "Sucrose": "0.1 g",
          "Lactose Monohydrate": "0.05 g"
      }
  },
  {
      "name": "Tamsulosin",
      "description": "Used to treat benign prostatic hyperplasia (BPH) in men. It works by relaxing the muscles in the prostate and bladder.",
      "max_dosage": "0.8 mg per day",
      "ingredients": {
          "Tamsulosin Hydrochloride": "0.4 mg",
          "Gelatin": "0.2 g",
          "Talc": "0.05 g"
      }
  },
  {
      "name": "Furosemide",
      "description": "A diuretic used to treat fluid build-up due to heart failure, liver scarring, or kidney disease.",
      "max_dosage": "600 mg per day",
      "ingredients": {
          "Furosemide": "0.02 g",
          "Starch": "0.1 g",
          "Lactose Monohydrate": "0.2 g"
      }
  },
  {
      "name": "Fluoxetine",
      "description": "An antidepressant used to treat major depressive disorder, bulimia nervosa, obsessive-compulsive disorder, and panic disorder.",
      "max_dosage": "80 mg per day",
      "ingredients": {
          "Fluoxetine Hydrochloride": "0.02 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Sertraline",
      "description": "Used to treat depression, panic attacks, obsessive-compulsive disorder (OCD), post-traumatic stress disorder (PTSD), and social anxiety disorder.",
      "max_dosage": "200 mg per day",
      "ingredients": {
          "Sertraline Hydrochloride": "0.05 g",
          "Lactose Monohydrate": "0.2 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Citalopram",
      "description": "An antidepressant used to treat depression and sometimes for panic attacks.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Citalopram Hydrobromide": "0.02 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Montelukast",
      "description": "Used to prevent and manage asthma symptoms and to relieve the symptoms of seasonal allergies.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Montelukast Sodium": "0.01 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Hydroxyzine",
      "description": "Used to treat anxiety and tension, and also to relieve allergic skin reactions such as hives or contact dermatitis.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Hydroxyzine Hydrochloride": "0.025 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Bupropion",
      "description": "An antidepressant used to treat major depressive disorder and seasonal affective disorder. It is also used to help people stop smoking.",
      "max_dosage": "450 mg per day",
      "ingredients": {
          "Bupropion Hydrochloride": "0.15 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Duloxetine",
      "description": "Used to treat major depressive disorder, generalized anxiety disorder, fibromyalgia, and chronic pain related to muscles and bones.",
      "max_dosage": "120 mg per day",
      "ingredients": {
          "Duloxetine Hydrochloride": "0.03 g",
          "Sucrose": "0.15 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Venlafaxine",
      "description": "An antidepressant used to treat major depressive disorder, anxiety, and panic disorder.",
      "max_dosage": "375 mg per day",
      "ingredients": {
          "Venlafaxine Hydrochloride": "0.15 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Metoclopramide",
      "description": "Used to treat certain conditions of the stomach and intestines. It is commonly used to prevent nausea and vomiting caused by chemotherapy or surgery.",
      "max_dosage": "60 mg per day",
      "ingredients": {
          "Metoclopramide Hydrochloride": "0.01 g",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Ranitidine",
      "description": "Used to treat and prevent ulcers in the stomach and intestines, and conditions in which the stomach produces too much acid.",
      "max_dosage": "300 mg per day",
      "ingredients": {
          "Ranitidine Hydrochloride": "0.15 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Propranolol",
      "description": "A beta-blocker used to treat high blood pressure, irregular heartbeats, shaking (tremors), and other conditions.",
      "max_dosage": "320 mg per day",
      "ingredients": {
          "Propranolol Hydrochloride": "0.08 g",
          "Lactose Monohydrate": "0.2 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Glyburide",
      "description": "Used to improve blood sugar control in adults with type 2 diabetes mellitus.",
      "max_dosage": "20 mg per day",
      "ingredients": {
          "Glyburide": "0.005 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Loratadine",
      "description": "An antihistamine used to relieve allergy symptoms such as a runny nose, sneezing, and watery eyes.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Loratadine": "0.01 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Meloxicam",
      "description": "Used to treat pain or inflammation caused by rheumatoid arthritis and osteoarthritis in adults.",
      "max_dosage": "15 mg per day",
      "ingredients": {
          "Meloxicam": "0.015 g",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Tramadol",
      "description": "A pain reliever used to treat moderate to moderately severe pain.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Tramadol Hydrochloride": "0.05 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Trazodone",
      "description": "Used to treat major depressive disorder, and can also help with sleep disorders such as insomnia.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Trazodone Hydrochloride": "0.1 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Clonazepam",
      "description": "A medication used to prevent and treat seizures, panic disorder, and for the movement disorder known as akathisia.",
      "max_dosage": "20 mg per day",
      "ingredients": {
          "Clonazepam": "0.5 mg",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Cyclobenzaprine",
      "description": "A muscle relaxant used to treat muscle spasms from musculoskeletal conditions.",
      "max_dosage": "30 mg per day",
      "ingredients": {
          "Cyclobenzaprine Hydrochloride": "0.01 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Warfarin",
      "description": "An anticoagulant used to treat and prevent blood clots.",
      "max_dosage": "15 mg per day",
      "ingredients": {
          "Warfarin Sodium": "0.005 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Amitriptyline",
      "description": "An antidepressant used to treat depression and sometimes for pain relief in conditions such as fibromyalgia and chronic headaches.",
      "max_dosage": "150 mg per day",
      "ingredients": {
          "Amitriptyline Hydrochloride": "0.05 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Hydrochlorothiazide",
      "description": "A diuretic used to treat high blood pressure and fluid retention (edema).",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Hydrochlorothiazide": "0.025 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Ondansetron",
      "description": "Used to prevent nausea and vomiting caused by cancer chemotherapy, radiation therapy, or surgery.",
      "max_dosage": "24 mg per day",
      "ingredients": {
          "Ondansetron Hydrochloride": "0.008 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Oxycodone",
      "description": "An opioid pain medication used to treat moderate to severe pain.",
      "max_dosage": "80 mg per day",
      "ingredients": {
          "Oxycodone Hydrochloride": "0.02 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Metformin",
      "description": "Used to treat type 2 diabetes, often in combination with other medications.",
      "max_dosage": "2000 mg per day",
      "ingredients": {
          "Metformin Hydrochloride": "0.5 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Ibuprofen",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation.",
      "max_dosage": "3200 mg per day",
      "ingredients": {
          "Ibuprofen": "0.2 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Pregabalin",
      "description": "Used to treat nerve pain, fibromyalgia, and seizures.",
      "max_dosage": "600 mg per day",
      "ingredients": {
          "Pregabalin": "0.15 g",
          "Microcrystalline Cellulose": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Allopurinol",
      "description": "Used to treat gout and kidney stones, and to decrease levels of uric acid in people receiving cancer treatment.",
      "max_dosage": "800 mg per day",
      "ingredients": {
          "Allopurinol": "0.1 g",
          "Lactose Monohydrate": "0.2 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Celecoxib",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by conditions such as arthritis.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Celecoxib": "0.2 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Losartan",
      "description": "Used to treat high blood pressure (hypertension) and to help protect the kidneys from damage due to diabetes.",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Losartan Potassium": "0.025 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Simvastatin",
      "description": "Used to lower cholesterol and triglycerides (types of fat) in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Simvastatin": "0.02 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Clopidogrel",
      "description": "Used to prevent heart attacks and strokes in persons with heart disease.",
      "max_dosage": "75 mg per day",
      "ingredients": {
          "Clopidogrel Bisulfate": "0.075 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Levothyroxine",
      "description": "Used to treat an underactive thyroid (hypothyroidism).",
      "max_dosage": "300 mcg per day",
      "ingredients": {
          "Levothyroxine Sodium": "0.1 mg",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Amlodipine",
      "description": "Used to treat high blood pressure (hypertension) and chest pain (angina).",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Amlodipine Besylate": "0.005 g",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Rosuvastatin",
      "description": "Used to lower cholesterol and triglycerides in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Rosuvastatin Calcium": "0.01 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Spironolactone",
      "description": "A diuretic used to treat certain patients with hyperaldosteronism, low potassium levels, or edema.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Spironolactone": "0.025 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Lisinopril",
      "description": "Used to treat high blood pressure (hypertension) and heart failure.",
      "max_dosage": "80 mg per day",
      "ingredients": {
          "Lisinopril": "0.02 g",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Cefdinir",
      "description": "An antibiotic used to treat a wide variety of bacterial infections.",
      "max_dosage": "600 mg per day",
      "ingredients": {
          "Cefdinir": "0.3 g",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Duloxetine",
      "description": "Used to treat depression, anxiety, and pain caused by nerve damage in adults with diabetes (diabetic peripheral neuropathy).",
      "max_dosage": "120 mg per day",
      "ingredients": {
          "Duloxetine Hydrochloride": "0.03 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Diazepam",
      "description": "Used to treat anxiety disorders, alcohol withdrawal symptoms, or muscle spasms.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Diazepam": "0.01 g",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
    "name": "Gabapentin",
    "description": "Used to treat nerve pain and seizures.",
    "max_dosage": "3600 mg per day",
    "ingredients": {
        "Gabapentin": "0.3 g",
        "Lactose Monohydrate": "0.2 g",
        "Magnesium Stearate": "0.01 g"
    }
  },
  {
      "name": "Tamsulosin",
      "description": "Used to treat symptoms of an enlarged prostate (benign prostatic hyperplasia).",
      "max_dosage": "0.8 mg per day",
      "ingredients": {
          "Tamsulosin Hydrochloride": "0.4 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Escitalopram",
      "description": "Used to treat depression and generalized anxiety disorder.",
      "max_dosage": "20 mg per day",
      "ingredients": {
          "Escitalopram Oxalate": "10 mg",
          "Lactose Monohydrate": "0.15 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Azithromycin",
      "description": "An antibiotic used to treat a variety of bacterial infections.",
      "max_dosage": "500 mg per day",
      "ingredients": {
          "Azithromycin": "0.5 g",
          "Starch": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Meloxicam",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by rheumatoid arthritis and osteoarthritis.",
      "max_dosage": "15 mg per day",
      "ingredients": {
          "Meloxicam": "7.5 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Tramadol",
      "description": "A pain reliever used to treat moderate to moderately severe pain.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Tramadol Hydrochloride": "50 mg",
          "Starch": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Sildenafil",
      "description": "Used to treat erectile dysfunction and pulmonary arterial hypertension.",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Sildenafil Citrate": "50 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Fluoxetine",
      "description": "Used to treat depression, obsessive-compulsive disorder (OCD), bulimia nervosa, and panic disorder.",
      "max_dosage": "80 mg per day",
      "ingredients": {
          "Fluoxetine Hydrochloride": "20 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Propranolol",
      "description": "A beta-blocker used to treat tremors, angina (chest pain), hypertension (high blood pressure), heart rhythm disorders, and other heart or circulatory conditions.",
      "max_dosage": "320 mg per day",
      "ingredients": {
          "Propranolol Hydrochloride": "40 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Carvedilol",
      "description": "Used to treat heart failure and hypertension.",
      "max_dosage": "50 mg per day",
      "ingredients": {
          "Carvedilol": "12.5 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Hydralazine",
      "description": "A vasodilator used to treat high blood pressure (hypertension).",
      "max_dosage": "300 mg per day",
      "ingredients": {
          "Hydralazine Hydrochloride": "50 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Bupropion",
      "description": "Used to treat depression and to help people quit smoking.",
      "max_dosage": "450 mg per day",
      "ingredients": {
          "Bupropion Hydrochloride": "150 mg",
          "Starch": "0.2 g",
          "Magnesium Stearate": "0.02 g"
      }
  },
  {
      "name": "Quetiapine",
      "description": "An antipsychotic medication used to treat schizophrenia, bipolar disorder, and major depressive disorder.",
      "max_dosage": "800 mg per day",
      "ingredients": {
          "Quetiapine Fumarate": "200 mg",
          "Microcrystalline Cellulose": "0.15 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Alprazolam",
      "description": "A benzodiazepine used to treat anxiety and panic disorders.",
      "max_dosage": "4 mg per day",
      "ingredients": {
          "Alprazolam": "0.5 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Venlafaxine",
      "description": "An antidepressant used to treat major depressive disorder, anxiety, and panic disorder.",
      "max_dosage": "375 mg per day",
      "ingredients": {
          "Venlafaxine Hydrochloride": "75 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Montelukast",
      "description": "Used to prevent asthma attacks and to relieve symptoms of seasonal allergies.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Montelukast Sodium": "10 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Pantoprazole",
      "description": "A proton pump inhibitor used to treat certain stomach and esophagus problems (such as acid reflux).",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Pantoprazole Sodium": "40 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Loratadine",
      "description": "An antihistamine used to relieve allergy symptoms.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Loratadine": "10 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Metoprolol",
      "description": "A beta-blocker used to treat angina (chest pain) and hypertension.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Metoprolol Tartrate": "50 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Amoxicillin",
      "description": "An antibiotic used to treat a variety of bacterial infections.",
      "max_dosage": "3000 mg per day",
      "ingredients": {
          "Amoxicillin": "500 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Methotrexate",
      "description": "Used to treat certain types of cancer, severe psoriasis, and rheumatoid arthritis.",
      "max_dosage": "20 mg per week",
      "ingredients": {
          "Methotrexate": "2.5 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Diclofenac",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain and inflammatory diseases such as arthritis.",
      "max_dosage": "150 mg per day",
      "ingredients": {
          "Diclofenac Sodium": "50 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Lisinopril",
      "description": "An ACE inhibitor used to treat high blood pressure (hypertension) and heart failure.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Lisinopril": "10 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Clopidogrel",
      "description": "An antiplatelet medication used to prevent heart attacks and strokes in persons with heart disease.",
      "max_dosage": "75 mg per day",
      "ingredients": {
          "Clopidogrel Bisulfate": "75 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Sertraline",
      "description": "An antidepressant used to treat depression, panic attacks, obsessive-compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).",
      "max_dosage": "200 mg per day",
      "ingredients": {
          "Sertraline Hydrochloride": "50 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.015 g"
      }
  },
  {
      "name": "Hydrochlorothiazide",
      "description": "A diuretic (water pill) used to treat high blood pressure (hypertension) and fluid retention (edema).",
      "max_dosage": "50 mg per day",
      "ingredients": {
          "Hydrochlorothiazide": "25 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Furosemide",
      "description": "A diuretic (water pill) used to treat fluid retention (edema) in people with congestive heart failure, liver disease, or kidney disorders.",
      "max_dosage": "600 mg per day",
      "ingredients": {
          "Furosemide": "40 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Atenolol",
      "description": "A beta-blocker used to treat high blood pressure (hypertension) and chest pain (angina).",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Atenolol": "50 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Ciprofloxacin",
      "description": "An antibiotic used to treat a variety of bacterial infections.",
      "max_dosage": "1500 mg per day",
      "ingredients": {
          "Ciprofloxacin Hydrochloride": "500 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Warfarin",
      "description": "An anticoagulant (blood thinner) used to prevent blood clots.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Warfarin Sodium": "5 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Simvastatin",
      "description": "A statin medication used to lower cholesterol and triglycerides in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Simvastatin": "20 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Spironolactone",
      "description": "A diuretic (water pill) used to treat heart failure, high blood pressure (hypertension), and conditions with fluid retention (edema).",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Spironolactone": "100 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Allopurinol",
      "description": "Used to treat gout and certain types of kidney stones, and to prevent increased uric acid levels in patients receiving cancer treatment.",
      "max_dosage": "800 mg per day",
      "ingredients": {
          "Allopurinol": "300 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Glipizide",
      "description": "An oral diabetes medicine that helps control blood sugar levels by helping your pancreas produce insulin.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Glipizide": "10 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Prednisone",
      "description": "A corticosteroid used to treat a variety of conditions including allergies, skin conditions, ulcerative colitis, arthritis, lupus, psoriasis, or breathing disorders.",
      "max_dosage": "60 mg per day",
      "ingredients": {
          "Prednisone": "20 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Ondansetron",
      "description": "Used to prevent nausea and vomiting caused by surgery or chemotherapy.",
      "max_dosage": "24 mg per day",
      "ingredients": {
          "Ondansetron Hydrochloride": "8 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Amlodipine",
      "description": "A calcium channel blocker used to treat high blood pressure (hypertension) and angina (chest pain).",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Amlodipine Besylate": "5 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Rosuvastatin",
      "description": "A statin medication used to lower cholesterol and triglycerides in the blood.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Rosuvastatin Calcium": "10 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Metformin",
      "description": "An oral diabetes medicine that helps control blood sugar levels.",
      "max_dosage": "2500 mg per day",
      "ingredients": {
          "Metformin Hydrochloride": "500 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Losartan",
      "description": "An angiotensin II receptor blocker (ARB) used to treat high blood pressure (hypertension).",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Losartan Potassium": "50 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Trazodone",
      "description": "An antidepressant used to treat major depressive disorder.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Trazodone Hydrochloride": "100 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Clonazepam",
      "description": "A benzodiazepine used to treat seizure disorders and panic disorders.",
      "max_dosage": "4 mg per day",
      "ingredients": {
          "Clonazepam": "1 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Hydrocodone/Acetaminophen",
      "description": "A combination pain medication used to relieve moderate to severe pain.",
      "max_dosage": "8 tablets per day",
      "ingredients": {
          "Hydrocodone Bitartrate": "5 mg",
          "Acetaminophen": "325 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Metoprolol",
      "description": "A beta-blocker used to treat high blood pressure (hypertension), chest pain (angina), and heart failure.",
      "max_dosage": "400 mg per day",
      "ingredients": {
          "Metoprolol Tartrate": "50 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Carvedilol",
      "description": "A beta-blocker used to treat heart failure and high blood pressure (hypertension).",
      "max_dosage": "100 mg per day",
      "ingredients": {
          "Carvedilol": "25 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Citalopram",
      "description": "An antidepressant used to treat depression.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Citalopram Hydrobromide": "20 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Gabapentin",
      "description": "An anticonvulsant used to treat nerve pain and seizures.",
      "max_dosage": "3600 mg per day",
      "ingredients": {
          "Gabapentin": "300 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Montelukast",
      "description": "A leukotriene receptor antagonist used to treat asthma and allergies.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Montelukast Sodium": "10 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Bupropion",
      "description": "An antidepressant used to treat major depressive disorder and to support smoking cessation.",
      "max_dosage": "450 mg per day",
      "ingredients": {
          "Bupropion Hydrochloride": "150 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Esomeprazole",
      "description": "A proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD) and other stomach acid-related conditions.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Esomeprazole Magnesium": "20 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Aspirin",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever, pain, and inflammation.",
      "max_dosage": "4000 mg per day",
      "ingredients": {
          "Aspirin": "500 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Ranitidine",
      "description": "A histamine-2 blocker used to reduce stomach acid and treat conditions like ulcers and gastroesophageal reflux disease (GERD).",
      "max_dosage": "300 mg per day",
      "ingredients": {
          "Ranitidine Hydrochloride": "150 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Loratadine",
      "description": "An antihistamine used to relieve allergy symptoms such as runny nose, sneezing, and itchy eyes.",
      "max_dosage": "10 mg per day",
      "ingredients": {
          "Loratadine": "10 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Propranolol",
      "description": "A beta-blocker used to treat high blood pressure, irregular heartbeats, and other heart-related conditions.",
      "max_dosage": "320 mg per day",
      "ingredients": {
          "Propranolol Hydrochloride": "40 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Paroxetine",
      "description": "An antidepressant used to treat depression, anxiety disorders, and other mental health conditions.",
      "max_dosage": "50 mg per day",
      "ingredients": {
          "Paroxetine Hydrochloride": "25 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Levothyroxine",
      "description": "A synthetic thyroid hormone used to treat hypothyroidism.",
      "max_dosage": "200 mcg per day",
      "ingredients": {
          "Levothyroxine Sodium": "100 mcg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Acyclovir",
      "description": "An antiviral medication used to treat infections caused by herpes viruses.",
      "max_dosage": "4000 mg per day",
      "ingredients": {
          "Acyclovir": "800 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Meloxicam",
      "description": "A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by arthritis.",
      "max_dosage": "15 mg per day",
      "ingredients": {
          "Meloxicam": "7.5 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Enalapril",
      "description": "An ACE inhibitor used to treat high blood pressure (hypertension) and heart failure.",
      "max_dosage": "40 mg per day",
      "ingredients": {
          "Enalapril Maleate": "20 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Diltiazem",
      "description": "A calcium channel blocker used to treat high blood pressure (hypertension) and chest pain (angina).",
      "max_dosage": "360 mg per day",
      "ingredients": {
          "Diltiazem Hydrochloride": "120 mg",
          "Lactose Monohydrate": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Venlafaxine",
      "description": "An antidepressant used to treat depression, anxiety, and panic disorders.",
      "max_dosage": "225 mg per day",
      "ingredients": {
          "Venlafaxine Hydrochloride": "75 mg",
          "Starch": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  },
  {
      "name": "Lansoprazole",
      "description": "A proton pump inhibitor (PPI) used to treat gastroesophageal reflux disease (GERD) and other stomach acid-related conditions.",
      "max_dosage": "30 mg per day",
      "ingredients": {
          "Lansoprazole": "15 mg",
          "Microcrystalline Cellulose": "0.1 g",
          "Magnesium Stearate": "0.01 g"
      }
  }
]
