import type { Language } from "../content";
import { portfolioContent } from "../content";

type ResumeContent = (typeof portfolioContent)[Language]["resume"];
type PdfColor = readonly [number, number, number];

const pageWidth = 210;
const pageHeight = 297;
const margin = 15;
const contentWidth = pageWidth - margin * 2;
const ink: PdfColor = [15, 23, 42];
const muted: PdfColor = [71, 85, 105];
const navy: PdfColor = [10, 24, 35];
const green: PdfColor = [16, 185, 129];
const lightGreen: PdfColor = [52, 211, 153];
const lightRule: PdfColor = [203, 213, 225];

export async function createResumePdf(content: ResumeContent, language: Language) {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ format: "a4", unit: "mm" });
  const name = portfolioContent[language].hero.name;
  let cursorY = 0;

  pdf.setProperties({
    title: `${name} - ${content.role}`,
    author: name,
    subject: content.role,
  });

  const startPage = () => {
    cursorY = margin;
  };

  const addPageIfNeeded = (height: number) => {
    if (cursorY + height > pageHeight - margin) {
      pdf.addPage();
      startPage();
    }
  };

  const paragraphLines = (text: string, size: number, indent = 0) => {
    pdf.setFontSize(size);
    return pdf.splitTextToSize(text, contentWidth - indent);
  };

  const paragraphHeight = (text: string, size: number, indent = 0) =>
    paragraphLines(text, size, indent).length * (size * 0.49) + 1.2;

  const addParagraph = (
    text: string,
    options: { bold?: boolean; size?: number; color?: PdfColor; indent?: number } = {},
  ) => {
    const { bold = false, size = 10, color = muted, indent = 0 } = options;
    pdf.setFont("helvetica", bold ? "bold" : "normal");
    pdf.setFontSize(size);
    pdf.setTextColor(...color);
    const lines = paragraphLines(text, size, indent);
    const lineHeight = size * 0.49;
    const height = lines.length * lineHeight + 1.2;
    addPageIfNeeded(height);
    pdf.text(lines, margin + indent, cursorY);
    cursorY += height;
  };

  const addSectionHeading = (heading: string, nextContentHeight = 5) => {
    addPageIfNeeded(16 + nextContentHeight);
    cursorY += 3;
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(14);
    pdf.setTextColor(...navy);
    pdf.text(heading, margin, cursorY + 4);
    const headingWidth = Math.min(pdf.getTextWidth(heading), 36);
    pdf.setDrawColor(...green);
    pdf.setLineWidth(0.8);
    pdf.line(margin, cursorY + 7, margin + headingWidth, cursorY + 7);
    pdf.setDrawColor(...lightRule);
    pdf.setLineWidth(0.2);
    pdf.line(margin, cursorY + 9, pageWidth - margin, cursorY + 9);
    cursorY += 14;
  };

  const addLinkLine = (label: string, url: string, display: string, x: number, y: number) => {
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8.3);
    pdf.setTextColor(226, 232, 240);
    pdf.text(`${label}:`, x, y);
    x += pdf.getTextWidth(`${label}: `);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(...lightGreen);
    pdf.textWithLink(display, x, y, { url });
  };

  const addLinkRow = (
    first: { label: string; url: string; display: string },
    second: { label: string; url: string; display: string },
    y: number,
  ) => {
    addLinkLine(first.label, first.url, first.display, margin, y);
    const secondX = margin + 87;
    addLinkLine(second.label, second.url, second.display, secondX, y);
  };

  const getContactLink = (id: "email" | "linkedin" | "github" | "whatsapp") => {
    const link = portfolioContent[language].contact.links.find((item) => item.id === id);
    if (!link) {
      throw new Error(`Missing resume contact link: ${id}`);
    }
    return link;
  };

  startPage();

  const headerTop = 0;
  const headerHeight = 58;
  pdf.setFillColor(...navy);
  pdf.rect(0, headerTop, pageWidth, headerHeight, "F");
  const nameParts = name.split(" ");
  const firstName = nameParts.shift() ?? name;
  const surname = nameParts.join(" ");
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(25);
  pdf.setTextColor(248, 250, 252);
  pdf.text(firstName, margin, 17);
  const surnameX = margin + pdf.getTextWidth(`${firstName} `);
  pdf.setTextColor(...green);
  pdf.text(surname, surnameX, 17);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(12);
  pdf.setTextColor(248, 250, 252);
  pdf.text(content.role, margin, 26);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(9);
  pdf.setTextColor(203, 213, 225);
  pdf.text(
    language === "pt-BR" ? "5 anos de experiência" : "5 years of experience",
    margin,
    33,
  );

  const email = getContactLink("email");
  const linkedin = getContactLink("linkedin");
  const github = getContactLink("github");
  const whatsapp = getContactLink("whatsapp");
  const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
  const emailLink = {
    label: email.label,
    url: email.href,
    display: email.value,
  };
  const locationLink = {
    label: language === "pt-BR" ? "Localização" : "Location",
    url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.location)}`,
    display: content.location,
  };
  addLinkRow(emailLink, locationLink, 40);
  addLinkRow(
    { label: linkedin.label, url: linkedin.href, display: displayUrl(linkedin.href) },
    { label: github.label, url: github.href, display: displayUrl(github.href) },
    46,
  );
  addLinkLine(whatsapp.label, whatsapp.href, displayUrl(whatsapp.href), margin, 52);
  cursorY = headerTop + headerHeight + 8;

  addSectionHeading(
    language === "pt-BR" ? "Perfil profissional" : "Professional summary",
    paragraphHeight(content.summary, 10),
  );
  addParagraph(content.summary, { size: 10, color: ink });

  const experienceHeight =
    13 +
    paragraphHeight(content.experienceRole, 10) +
    paragraphHeight(content.company, 10) +
    paragraphHeight(content.period, 9) +
    content.experienceDetails.reduce(
      (total, detail) => total + paragraphHeight(`- ${detail}`, 9.5, 4),
      0,
    ) +
    paragraphHeight(content.experienceTechnologies, 9, 4);
  const remainingPageHeight = pageHeight - margin - cursorY;
  const keepExperienceTogether = experienceHeight <= remainingPageHeight;
  const experienceStartHeight =
    paragraphHeight(content.experienceRole, 10) +
    paragraphHeight(content.company, 9) +
    paragraphHeight(`- ${content.experienceDetails[0] ?? ""}`, 9.5, 4);
  addSectionHeading(
    content.experienceHeading,
    keepExperienceTogether ? experienceHeight : experienceStartHeight,
  );
  addParagraph(content.company, { bold: true, size: 11, color: ink });
  addParagraph(content.period, { bold: true, size: 10, color: green });
  addParagraph(content.experienceRole, { size: 10, color: muted });
  for (const detail of content.experienceDetails) {
    addParagraph(`- ${detail}`, { size: 10, indent: 4 });
  }
  addParagraph(content.experienceTechnologies, {
    size: 9.5,
    color: muted,
    indent: 4,
  });

  const skillsHeight = content.skills.reduce((total, group) => {
    return total + paragraphHeight(group.title, 10) + paragraphHeight(group.items.join(", "), 10, 3);
  }, 0);
  addSectionHeading(content.skillsHeading, skillsHeight);
  for (const group of content.skills) {
    addParagraph(group.title, { bold: true, size: 10, color: ink });
    addParagraph(group.items.join(", "), { size: 10, color: muted, indent: 3 });
  }

  const languageSummary = content.languages
    .map((item) => `${item.name} (${item.level})`)
    .join("; ");
  addSectionHeading(
    content.educationHeading,
    paragraphHeight(content.degree, 11) +
      paragraphHeight(content.institution, 10) +
      paragraphHeight(content.graduation, 10) +
      paragraphHeight(`${content.languagesHeading}: ${languageSummary}`, 10),
  );
  addParagraph(content.degree, { bold: true, size: 11, color: ink });
  addParagraph(content.institution, { size: 10, color: muted });
  addParagraph(content.graduation, { size: 10, color: green });
  addParagraph(`${content.languagesHeading}: ${languageSummary}`, {
    size: 10,
    color: ink,
  });

  const pageCount = pdf.getNumberOfPages();
  if (pageCount > 1) {
    for (let page = 1; page <= pageCount; page += 1) {
      pdf.setPage(page);
      pdf.setDrawColor(...lightRule);
      pdf.setLineWidth(0.25);
      pdf.line(margin, pageHeight - 12, pageWidth - margin, pageHeight - 12);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(7.5);
      pdf.setTextColor(...muted);
      pdf.text(`${page} / ${pageCount}`, pageWidth - margin, pageHeight - 7, {
        align: "right",
      });
    }
  }

  return pdf;
}

export async function downloadResume(content: ResumeContent, language: Language) {
  const pdf = await createResumePdf(content, language);
  pdf.save(`${content.fileName}.pdf`);
}
