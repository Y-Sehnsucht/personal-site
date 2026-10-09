from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "files" / "zijun-yan-cv.pdf"

INK = colors.HexColor("#17191D")
MUTED = colors.HexColor("#5F6670")
RULE = colors.HexColor("#CFD3DA")
ACCENT = colors.HexColor("#173ED1")


def paragraph_style(
    name: str,
    *,
    parent: ParagraphStyle,
    font_name: str = "Helvetica",
    font_size: float = 8.4,
    leading: float = 11.0,
    text_color=INK,
    space_after: float = 0,
    alignment: int = TA_LEFT,
) -> ParagraphStyle:
    return ParagraphStyle(
        name,
        parent=parent,
        fontName=font_name,
        fontSize=font_size,
        leading=leading,
        textColor=text_color,
        spaceAfter=space_after,
        alignment=alignment,
        allowWidows=0,
        allowOrphans=0,
    )


styles = getSampleStyleSheet()
body = paragraph_style(
    "Body", parent=styles["Normal"], font_name="Times-Roman", font_size=8.6, leading=11.2
)
small = paragraph_style(
    "Small", parent=styles["Normal"], font_size=7.4, leading=9.3, text_color=MUTED
)
small_dark = paragraph_style(
    "SmallDark", parent=small, text_color=INK
)
roomy_body = paragraph_style(
    "RoomyBody", parent=body, leading=13.2
)
roomy_small_dark = paragraph_style(
    "RoomySmallDark", parent=small_dark, leading=12.0
)
role = paragraph_style(
    "Role", parent=small, font_name="Helvetica-Bold", font_size=7.1, leading=9.0
)
roomy_role = paragraph_style(
    "RoomyRole", parent=role, leading=10.5
)
project_title = paragraph_style(
    "ProjectTitle", parent=styles["Normal"], font_name="Helvetica-Bold", font_size=9.0, leading=10.8
)
section_title = paragraph_style(
    "SectionTitle",
    parent=styles["Normal"],
    font_name="Helvetica-Bold",
    font_size=9.1,
    leading=10.5,
    text_color=ACCENT,
)
tech = paragraph_style(
    "Tech", parent=styles["Normal"], font_name="Helvetica-Bold", font_size=6.9, leading=8.5, text_color=ACCENT
)
roomy_tech = paragraph_style(
    "RoomyTech", parent=tech, leading=10.0, text_color=ACCENT
)
contact = paragraph_style(
    "Contact", parent=small, font_size=7.2, leading=9.3, alignment=TA_RIGHT
)
name_style = paragraph_style(
    "Name", parent=styles["Normal"], font_name="Times-Bold", font_size=25, leading=26
)
kicker = paragraph_style(
    "Kicker", parent=styles["Normal"], font_name="Helvetica-Bold", font_size=7.2, leading=9.0, text_color=MUTED
)
metric_label = paragraph_style(
    "MetricLabel", parent=styles["Normal"], font_name="Helvetica-Bold", font_size=5.9, leading=7.2, text_color=MUTED
)
metric_value = paragraph_style(
    "MetricValue", parent=styles["Normal"], font_name="Helvetica-Bold", font_size=8.1, leading=9.4
)
def draw_page(canvas, document) -> None:
    width, height = A4
    canvas.saveState()
    canvas.setTitle("Zijun Yan - Curriculum Vitae")
    canvas.setAuthor("Zijun Yan")
    canvas.setSubject("Academic curriculum vitae")
    canvas.setFillColor(ACCENT)
    canvas.rect(0, height - 4.2 * mm, width, 2.2 * mm, fill=1, stroke=0)
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.45)
    canvas.line(15 * mm, 13 * mm, width - 15 * mm, 13 * mm)
    canvas.setFont("Helvetica-Bold", 5.8)
    canvas.setFillColor(ACCENT)
    canvas.drawString(15 * mm, 9.2 * mm, "ZIJUN YAN / CURRICULUM VITAE")
    page_text = f"{document.page:02d} / 02"
    canvas.drawRightString(width - 15 * mm, 9.2 * mm, page_text)
    canvas.restoreState()


def header(*, continued: bool = False) -> list:
    website = "https://y-sehnsucht.github.io/personal-site/"
    github = "https://github.com/Y-Sehnsucht"
    if continued:
        right = Paragraph(
            "Available now<br/>15-20 hours per week<br/>Long-term / Shanghai",
            contact,
        )
        subtitle = "CURRICULUM VITAE / CONTINUED"
    else:
        right = Paragraph(
            "Shanghai, China<br/>"
            '<a href="mailto:zijun1900@gmail.com" color="#5F6670">zijun1900@gmail.com</a><br/>'
            f'<a href="{website}" color="#5F6670">y-sehnsucht.github.io/personal-site</a><br/>'
            f'<a href="{github}" color="#5F6670">github.com/Y-Sehnsucht</a>',
            contact,
        )
        subtitle = "SOFTWARE ENGINEERING UNDERGRADUATE"

    left = [Paragraph("Zijun Yan", name_style), Paragraph(subtitle, kicker)]
    table = Table([[left, right]], colWidths=[118 * mm, 49 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "BOTTOM"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    return [table, Spacer(1, 5.5 * mm), HRFlowable(width="100%", thickness=1.1, color=INK)]


def section(label: str) -> list:
    return [Spacer(1, 5.1 * mm), Paragraph(label.upper(), section_title), Spacer(1, 1.3 * mm), HRFlowable(width="100%", thickness=0.45, color=RULE), Spacer(1, 2.5 * mm)]


def project(
    title: str,
    date: str,
    project_role: str,
    summary: str,
    bullets: list[str],
    technologies: str,
    url: str | None = None,
    roomy: bool = False,
) -> KeepTogether:
    title_text = f'<a href="{url}" color="#17191D">{title}</a>' if url else title
    heading = Table(
        [[Paragraph(title_text, project_title), Paragraph(date, contact)]],
        colWidths=[139 * mm, 28 * mm],
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    content = []
    if roomy:
        content.append(Spacer(1, 4.5 * mm))
    content.extend(
        [
            heading,
            Paragraph(project_role, roomy_role if roomy else role),
            Spacer(1, (2.3 if roomy else 1.6) * mm),
            Paragraph(summary, roomy_body if roomy else body),
        ]
    )
    if roomy:
        content.append(Spacer(1, 1.1 * mm))
    for index, item in enumerate(bullets):
        content.append(
            Paragraph(item, roomy_small_dark if roomy else small_dark, bulletText="-")
        )
        if roomy and index < len(bullets) - 1:
            content.append(Spacer(1, 0.65 * mm))
    content.extend(
        [
            Spacer(1, (1.8 if roomy else 1.0) * mm),
            Paragraph(technologies, roomy_tech if roomy else tech),
            Spacer(1, (5.0 if roomy else 3.0) * mm),
        ]
    )
    return KeepTogether(content)


def compact_project(title: str, meta: str, summary: str) -> list:
    return [
        HRFlowable(width="100%", thickness=0.9, color=INK),
        Spacer(1, 1.6 * mm),
        Paragraph(title, project_title),
        Paragraph(meta, role),
        Spacer(1, 1.4 * mm),
        Paragraph(summary, small_dark),
    ]


def award_row(title: str, award: str, date: str) -> Table:
    table = Table(
        [[[Paragraph(title, project_title), Paragraph(award, small)], Paragraph(date, contact)]],
        colWidths=[139 * mm, 28 * mm],
    )
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1.8 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.8 * mm),
                ("LINEBELOW", (0, 0), (-1, -1), 0.35, RULE),
            ]
        )
    )
    return table


def build_pdf() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=17 * mm,
        bottomMargin=18 * mm,
        title="Zijun Yan - Curriculum Vitae",
        author="Zijun Yan",
        subject="Academic curriculum vitae",
    )

    story: list = []
    story.extend(header())
    story.extend(section("Research Profile"))
    story.append(
        Paragraph(
            "Seeking a long-term undergraduate research internship or research-assistant opportunity where I can develop rigorous research habits through implementation, reproduction, experimentation, and technical writing.",
            body,
        )
    )
    story.append(Spacer(1, 3.0 * mm))
    interests = [
        [
            [
                HRFlowable(width="100%", thickness=0.9, color=INK),
                Paragraph("Software Engineering &amp; Developer Tools", project_title),
                Paragraph("Design, requirements, modeling, testing, and code quality.", small),
            ],
            [
                HRFlowable(width="100%", thickness=0.9, color=INK),
                Paragraph("AI-Assisted Software Engineering", project_title),
                Paragraph("LLMs and agents for coding, testing, debugging, and workflows.", small),
            ],
            [
                HRFlowable(width="100%", thickness=0.9, color=INK),
                Paragraph("Algorithms &amp; Reliable Systems", project_title),
                Paragraph("Retrieval, system modeling, performance, reliability, and security.", small),
            ],
        ]
    ]
    interest_table = Table(interests, colWidths=[53 * mm, 53 * mm, 53 * mm], hAlign="LEFT")
    interest_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-2, -1), 4 * mm),
                ("RIGHTPADDING", (-1, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(interest_table)

    story.extend(section("Education"))
    education_heading = Table(
        [[Paragraph("East China Normal University", project_title), Paragraph("2025 - 2029", contact)]],
        colWidths=[139 * mm, 28 * mm],
    )
    education_heading.setStyle(
        TableStyle(
            [
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.extend(
        [
            education_heading,
            Paragraph("B.Eng. in Software Engineering, expected 2029", body),
            Spacer(1, 2.3 * mm),
        ]
    )
    metric_data = [
        [
            [Paragraph("GPA", metric_label), Paragraph("3.81 / 4.0", metric_value)],
            [Paragraph("MAJOR RANK", metric_label), Paragraph("35 / 253 - TOP 14%", metric_value)],
            [Paragraph("SCHOLARSHIP RANK", metric_label), Paragraph("17 / 253 - TOP 7%", metric_value)],
            [Paragraph("CET-4", metric_label), Paragraph("589", metric_value)],
        ]
    ]
    metrics = Table(metric_data, colWidths=[41.75 * mm] * 4)
    metrics.setStyle(
        TableStyle(
            [
                ("BOX", (0, 0), (-1, -1), 0.4, RULE),
                ("INNERGRID", (0, 0), (-1, -1), 0.4, RULE),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 2.3 * mm),
                ("RIGHTPADDING", (0, 0), (-1, -1), 2.3 * mm),
                ("TOPPADDING", (0, 0), (-1, -1), 1.8 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.8 * mm),
            ]
        )
    )
    story.append(metrics)

    story.extend(section("Selected Projects"))
    story.append(
        project(
            "ScaffoldMind",
            "May - Jun 2026",
            "Independent Developer / Independent Project",
            "Designed and implemented a local-first workspace for structured computer-science learning, from product flows and interface design through backend APIs and persistence.",
            [
                "Built guided chat, practice, review, history, learner-profile, and local-settings workflows.",
                "Implemented React and TypeScript interfaces, Express APIs, SSE streaming, and backend LLM integration.",
                "Kept API credentials server-side and learning records local.",
            ],
            "React / TypeScript / Node.js / Express / SSE / LLM API",
            "https://y-sehnsucht.github.io/scaffoldmind/",
            roomy=True,
        )
    )
    story.append(HRFlowable(width="100%", thickness=0.35, color=RULE))
    story.append(Spacer(1, 3.5 * mm))
    story.append(
        project(
            "Mini-VDB: Dynamic Vector Index &amp; Exact Top-K Retrieval",
            "Jun 2026",
            "Independent Developer / Data Structures and Algorithm Practice / Supervisor: Wang Liping",
            "Implemented the indexing and retrieval core of a small vector database and documented design trade-offs for exact similarity search under dynamic updates.",
            [
                "Supported insertion, deletion, exact Top-K, and threshold retrieval with Euclidean distance and inner product.",
                "Implemented open-address hashing, heap-based Top-K selection, KD-tree pruning, and AVX2 sequential scanning.",
                "Developed eight progressive versions spanning sorting, priority queues, BSTs, and AVL trees.",
            ],
            "C++ / KD-tree / Top-K Retrieval / Heap / AVX2",
            roomy=True,
        )
    )
    story.append(HRFlowable(width="100%", thickness=0.35, color=RULE))
    story.append(Spacer(1, 3.5 * mm))
    story.append(
        project(
            "Intelligent Elevator Collaborative Modeling &amp; Simulation",
            "Jul 2026",
            "Control Modeling Contributor / Five-person course project / Supervisor: Liu Jing",
            "Independently completed the continuous-dynamics and control portion of a collaborative SysML and Simulink elevator model.",
            [
                "Modeled car, counterweight, load, gravity, friction, braking, and acceleration-to-position dynamics.",
                "Implemented PID feedback and load compensation with gravity, acceleration, and friction feed-forward terms.",
                "Validated final position error below 0.01 m for no-load, half-load, and full-load simulations.",
            ],
            "MATLAB / Simulink / SysML / PID Control / Dynamic Modeling",
            "https://y-sehnsucht.github.io/personal-site/projects/",
            roomy=True,
        )
    )

    story.append(PageBreak())
    story.extend(header(continued=True))
    story.extend(section("Additional Project"))
    story.append(
        project(
            "Maple",
            "Jan - Mar 2026",
            "Database &amp; Core API Subtask Owner / Four-person project",
            "Owned the persistence and core-data-service subtask for a local mind-map notebook with editing and version-management features.",
            [
                "Designed node, connection, and metadata schemas with Spring Boot entity mappings.",
                "Implemented APIs for node CRUD, connection management, and layout-data storage.",
            ],
            "Java 17 / Spring Boot / JPA / H2 / SQLite / REST API / Git",
            "https://github.com/boyu-by/Maple_Backend",
        )
    )

    story.extend(section("Competition & Design Work"))
    competition = Table(
        [[
            compact_project(
                "Intelligent Water Quality Monitoring &amp; Early-Warning System",
                "Team Lead / Four-person technical proposal / Oct - Nov 2025",
                "Coordinated the submission and contributed to the proposed sensing, acquisition, communication, data-fusion, warning, and energy architecture. Deliverables were a technical proposal, functional diagrams, and device concept design.",
            ),
            compact_project(
                "Zhiyi",
                "Technical &amp; Functional Proposal Design / Ten-person project / Jun 2026",
                "Authored the technical and functional sections of an education-technology proposal, translating educational goals into software functions, interaction flows, technical architecture, and application scenarios.",
            ),
        ]],
        colWidths=[81 * mm, 81 * mm],
    )
    competition.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, -1), 4 * mm),
                ("LEFTPADDING", (1, 0), (1, -1), 4 * mm),
                ("RIGHTPADDING", (1, 0), (1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.append(competition)

    story.extend(section("Honors & Awards"))
    story.extend(
        [
            award_row("Undergraduate Excellence Scholarship", "First Class, East China Normal University", "2025-2026"),
            award_row("Advanced Robotics and Simulation Technology Competition", "National Third Prize", "Nov 2025"),
            award_row("Challenge Cup Entrepreneurship Plan Competition, ECNU Round", "Silver Award", "Jun 2026"),
            award_row("ECNU Coder Freshman Programming Challenge", "Third Prize", "2025"),
            award_row("Boyuan IT Club Owner-Pro", "Third Prize", "Mar 2026"),
        ]
    )

    story.extend(section("Technical Skills"))
    skill_rows = [
        ("LANGUAGES", "C++, C, Python, Java, TypeScript"),
        ("AI &amp; RETRIEVAL", "LLM application development, prompt engineering, vector search, PyTorch"),
        ("SYSTEMS &amp; TOOLS", "Linux, Git/GitHub, unit testing, REST APIs"),
        ("MODELING", "MATLAB, Simulink, SysML, dynamic-system modeling"),
    ]
    skill_table = Table(
        [[Paragraph(label, metric_label), Paragraph(value, small_dark)] for label, value in skill_rows],
        colWidths=[34 * mm, 133 * mm],
    )
    skill_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1.1 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.1 * mm),
                ("LINEBELOW", (0, 0), (-1, -1), 0.3, RULE),
            ]
        )
    )
    story.append(skill_table)

    story.extend(section("Selected Coursework"))
    courses = [
        "Data Structures and Algorithms - 4.0/4.0 - 98/100",
        "Computer Systems - 4.0/4.0 - 90/100",
        "Object-Oriented Programming (C++) - 4.0/4.0",
        "Discrete Mathematics - 4.0/4.0",
        "Linear Algebra - 4.0/4.0",
        "Mathematics for Information Security - 4.0/4.0",
        "Mathematical Thinking of AI - 4.0/4.0",
        "Data Structures and Algorithm Practice - 4.0/4.0",
    ]
    course_table = Table(
        [[Paragraph(courses[index], small_dark), Paragraph(courses[index + 4], small_dark)] for index in range(4)],
        colWidths=[81 * mm, 81 * mm],
    )
    course_table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (0, -1), 0),
                ("RIGHTPADDING", (0, 0), (0, -1), 4 * mm),
                ("LEFTPADDING", (1, 0), (1, -1), 4 * mm),
                ("RIGHTPADDING", (1, 0), (1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 1.0 * mm),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 1.0 * mm),
            ]
        )
    )
    story.append(course_table)

    document.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT)


if __name__ == "__main__":
    build_pdf()
