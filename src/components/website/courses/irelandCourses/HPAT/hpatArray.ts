export const ABOUT_HPAT = [
  {
    title: "What Is HPAT?",
    description:
      "The HPAT is a mandatory admissions test for undergraduate Medicine in Ireland, used alongside Leaving Certificate results through the CAO system. It assesses reasoning, problem-solving, and interpersonal skills rather than academic knowledge, and applicants must submit both a valid HPAT score and Leaving Certificate results from the same sitting to be considered.",
  },
];

export const HPAT_Fees = [
   {
    title: "HPAT Dates, Fees & Results: Example HPAT Cycle (2026)",
    description:
      "Key Dates\n\n\u2022 Test window: 13–16 February\n\u2022 Registration opens: November\n\u2022 Standard registration deadline: mid-January\n\u2022 Late registration deadline: late January\n\nHPAT Fees\n\n\u2022 Standard HPAT fee: €164\n\nResults Release\n\u2022 HPAT results are released in April(University of Limerick (UL) applicants and mature test-takers) and June, depending on the applicant category. Always check official HPAT announcements for confirmed dates and deadlines.",
  },
]

export const HPAT_DATES = [
  {
    title: "Universities That Require HPAT in Ireland",
    description:
      "An HPAT score is required for undergraduate Medicine at the following Irish universities:\n\n\u2022 University of Galway\n\u2022 Royal College of Surgeons in Ireland (RCSI)\n\u2022 Trinity College Dublin\n\u2022 University College Cork (UCC)\n\u2022 University College Dublin (UCD)\n\u2022 University of Limerick (UL)\n\nHPAT is also required for selected University of Limerick allied health postgraduate programmes.",
  },
];

export const HPAT_CHANGES = [
  {
    title: "HPAT Changes - 2027",
    description:
      "From 2027 onwards, the Medicine entry points system in Ireland will change.\n\n\u2022 HPAT will remain compulsory\n\u2022 HPAT will contribute a maximum of 150 points (reduced from 300)\n\u2022 Leaving Certificate points will count in full, up to 625 points, with no moderation\n\u2022 The new maximum combined score will be 775 points\n\nAll existing entry requirements remain unchanged, including:\n\n\u2022 The 480 Leaving Certificate points minimum\n\u2022 The same-year HPAT rule\n\u2022 Minimum subject entry requirements",
  },
  {
    title: "FAQs",
    description:
      "1. How exactly is the Leaving Cert scoring changing?\n   Currently, LC points above 550 are &quot;moderated&quot; (e.g., every 5 points above 550 only counts as 1 point), capping the LC contribution at 565. From 2027, moderation is abolished. If you get 625 points in your Leaving Cert, you keep all 625 points for your medicine application.\n\n2. Why is the HPAT score being halved?\n   Universities have found that Leaving Cert results are a stronger predictor of a student's success in medical school. By reducing the HPAT to 150 points, it aligns the test's weight more closely withindividual LC subjects, making it less of a &quot;make or break&quot; factor for high-achieving students.\n\n3. Does the format of the HPAT exam change?\n   No. The structure remains the same. It will still consist of the three traditional sections:\n  \u2022Section 1: Logical Reasoning and Problem Solving\n  \u2022Section 2: Interpersonal Understanding\n  \u2022Section 3: Non-Verbal Reasoning\n  The change is purely in how the final score is weighted and added to your LC points.\n\n4. I am sitting the HPAT in 2025 or 2026. Does this affect me?\n   No. These changes only apply to students who will be starting their medical degree in September 2027 or later. If you are a current 6th-year or 5th-year student (entering in  25 or &# 26),the current 865-point system still applies to you.\n\n5. Is the HPAT still mandatory?\n   Yes. You must still sit the HPAT in the same year you intend to enter medicine. Even with the lower weighting, it remains a critical differentiator because most medicine applicants achieve very high LC points.\n\n6. Will this make it easier to get into Medicine?\n   Not necessarily. While the points look lower (775 vs 865), the competition remains the same.The change simply rewards students who perform exceptionally well in the Leaving Cert, whereas the old system allowed a very high HPAT score to compensate for a lower (but still high) LC score more effectively.",
  },
];

export interface UniversityRow {
  university: string;
  caoCode: string;
  places: string;
  points: string;
}

export const UNIVERSITY_TABLE: UniversityRow[] = [
  {
    university: "Trinity College Dublin (TCD)",
    caoCode: "TR051",
    places: "136",
    points: "739",
  },
  {
    university: "University College Dublin (UCD)",
    caoCode: "DN400",
    places: "123",
    points: "738",
  },
  {
    university: "Royal College of Surgeons (RCSI)",
    caoCode: "RC001",
    places: "75",
    points: "733*",
  },
  {
    university: "University College Cork (UCC)",
    caoCode: "CK701",
    places: "114",
    points: "730*",
  },
  {
    university: "University of Galway",
    caoCode: "GY501",
    places: "207",
    points: "728*",
  },
  {
    university: "University of Limerick (UL)",
    caoCode: "LM301",
    places: "30+ (Est.)",
    points: "N/A (Starts 2026)",
  },
];

