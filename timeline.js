const events = [

    {
        id: "firstlaw1800",
        year: "1800",
        title: "Europe",
        type: "main",
        bottomTitle: "At the beginning of the 18th century, laws forbidding women from wearing trousers arose all around Europe. It is probably the earliest trace of a formal anti-crossdressing law.",
        text: "Few exception where granted for medical reasons or for costumes (Carnival). The Painter and Lesbian Icon Rosa Bonheur (1822-1899) and the writer George Sand (1804-1876) were part of the few womans allowed to wear trousers eventhough not falling under those exceptions.",
        image: "images/Rosa.jpg",
        links: ["ohio1848"]
    },

    {
        id: "ohio1848",
        year: "1840",
        title: "Ohio",
        type: "main",
        bottomTitle: "40 years later (1848), the state of Ohio passed the first American law against both men and women crossdressing.",
        text: "  This would serve as a foundation for over 150 similar laws in the USA.",
        links: [""]
    },

    {
        id: "theCountess",
        year: "1895",
        title: "Paris",
        type: "up",
        anchor: "theCercle",
        bottomTitle: "In her autobiography The Secret Confessions of a Parisian: The Countess, 1850-1871 (1895), The Countess (also known as Pauline), a French courtesan and artist, depicts her life as a trans woman in the Second French Empire.",
        text: "Her biography is considered as one of the oldest autobiographie by a trans author.",
        image: "",
        links: [""]
    },


    {
        id: "theCercle",
        year: "1895",
        title: "New-York",
        type: "main",
        bottomTitle: "The Cercle Hermaphroditos is founded in New York in 1895, inscribing itself as the first informal trans advocacy organisation in the US.",
        text: "",
        image: "",
        links: ["jenniejune"]
    },
    {
        id: "jenniejune",
        year: "1918",
        title: "New-York",
        type: "up",
        anchor: "berlin1919",
        bottomTitle: "  One fellow member of the Cercle, the non-binary author Jennie June, publishes their autobiography in 1918 titled The Autobiography of an Androgyne",
        text: "becoming the first known trans author in the US ",
        image: "",
        links: ["theCountess"]
    },
    {
        id: "berlin1919",
        year: "1919",
        title: "Berlin",
        type: "main",
        bottomTitle: "In 1919, the Berlin police, in collaboration with the Institut für Sexualwissenschaft, issued Transvestite Permits, allowing legal crossdressing to patients of the Institut.",
        text: "",
        image: "images/berlin.jpg",
        links: ["dora1931"]
    },

    {
        id: "dora1931",
        year: "1931-1934",
        title: "Berlin-Czechoslovakia",
        type: "main",
        bottomTitle: "In 1931 and in 1934, Dora Richter changed history twice: firstly by becoming the first known trans woman to undergo vaginoplasty and secondly by being the first trans person to be granted a legal change of name by the President of Czechoslovakia.",
        text: "",
        image: "images/dora.jpg",
        links: ["BarbaraAnnWilcox1941", "michael1944", "rina1959"]
    },

    {
        id: "BarbaraAnnWilcox1941",
        year: "1941",
        title: "Los Angeles",
        type: "down",
        anchor: "michael1944",
        bottomTitle: "In 1941, Barbara Ann Wilcox achieved the same process after the filing of a petition to the Los Angeles County Superior Court, inscribing herself as one of the first trans women to successfully change her name in America.",
        text: "",
        links: ["michael1944"]
    },

    {
        id: "michael1944",
        year: "1944",
        type: "main",
        title: "Britain",
        bottomTitle: " In 1944, with the help of a doctor, Michael Dillon, a British doctor, author, and Buddhist monk, was issued a new birth certificate stating his chosen name and gender. He also became the first known trans man to undergo a phalloplasty in 1946. ",
        text: "He had in fact already started a hormonal transition in 1939, becoming the first known trans man to experiment with testosterone.",
        image: "images/michael.png",
        links: ["rina1959"]
    },

    {
        id: "DSM",
        year: "1952",
        type: "down",
        anchor: "Comptons",
        title: "World",
        bottomTitle: "In the first edition of the DSM Homosexuality was classified as a mental disorder.",
        text: "",
        links: [""]
    },

    {
        id: "rina1959",
        year: "1959",
        type: "up",
        anchor: "Comptons",
        title: "Israel",
        bottomTitle: "On 25 May 1956, Rina Natan became the first Israeli trans woman to undergo vaginoplasty. She was urgently hospitalized after attempting to perform the operation on herself.",
        text: "After over ten years of activism and fighting for the recognition of her trans identity, Rina received an emergency vaginoplasty. Following the surgery, she received a new ID stating her chosen name and gender.",
        links: [""]
    },

    {
        id: "Comptons",
        year: "1966",
        type: "main",
        title: "San Francisco",
        bottomTitle: "Comptons'Riot",
        text: "",
        image:"images/Comptons.jpg",
        links: ["stonewall1969", "ntcu"]
    },

    {
        id: "ntcu",
        year: "1968",
        type: "main",
        title: "Los Angeles",
        bottomTitle: "In 1968, the first peer-run support and advocacy organization, the National Trans Counseling Unit, is founded ",
        text: "(following the Compton's riot, a network of transgender support providing medical, social, and psychological assistance).",
        image: "",
        links: ["theCercle", "Comptons"]
    },

    {
        id: "stonewall1969",
        year: "1969",
        type: "main",
        title: "",
        bottomTitle: "Stonewall Riot's",
        text: "Beginning of modern LGBTQ+ activism.",
        image: "images/02.jpg",
        links: []
    },


    {
        id: "Sweden1972",
        year: "1972",
        type: "main",
        title: "Sweden",
        bottomTitle: "In 1972, Sweden became the first country to allow the legal change of gender and access to free hormone therapy for trans people.",
        text: "",
        image: "",
        links: []
    },

    {
        id: "EqualTreatment",
        year: "1976",
        type: "up",
        anchor: "ftm",
        title: "European Union",
        bottomTitle: " On 9 February 1976, the European Union applied a new directive: the 1976 Equal Treatment Directive, stating the principle of equal treatment between men and women.",
        text: "This new directive did not mention any LGBTQ+ related topics.",
        image: "",
        links: ["NewEqualTreatment"]
    },


    {
        id: "RachaelWebb",
        year: "1984",
        type: "down",
        anchor: "ftm",
        title: "London",
        bottomTitle: " In 1984, Rachael Webb was elected as a councillor of the London Borough of Lambeth for the Labour Party. She is reportedly the first openly transgender person to be elected in the UK.",
        text: "",
        image: "",
        links: ["MarieConte"]
    },

    {
        id: "ftm",
        year: "1986",
        type: "main",
        title: "San-Francisco",
        bottomTitle: "In 1986, FTM International is founded in San Francisco by Lou Sullivan. It remains the oldest organization for trans men in the United States.",
        text: "Lou Sullivan is an American pioneer, author, and activist.",
        image: "images/Lou.jpg",
        links: ["ntcu"]
    },
    {
        id: "Maryam",
        year: "1986-1987",
        type: "up",
        anchor: "Turkey",
        title: "Iran",
        bottomTitle: " In 1987, Maryam Khatoonpour Molkara, an Iranian activist, convinced the Iranian leader of the time (Ayatollah Ruhollah Khomeini) to issue a fatwa in favor of trans reassignment surgery. In 1997, she became the first trans person in Iran to legally undergo such surgery with the financial support of the government.",
        text: " In 2007, she founded the first state-approved organisation for trans rights, the Iranian Society to Support Individuals with Gender Identity Disorder (obtaining the creation of governmental funding).",
        image: "",
        links: ["rina1959"]
    },
    {
        id: "Turkey",
        year: "1988",
        type: "main",
        title: "Turkey",
        bottomTitle: "Trans identity has been legal in Turkey since 1988, with the possibility of an official change of gender that requires sterilisation and surgery.",
        text: "",
        image: "",
        links: ["Sweden1972"]
    },

    {
        id: "MarieConte",
        year: "1991",
        type: "up",
        anchor: "GeorginaBeyer",
        title: "Colorado",
        bottomTitle: "In 1991, Joanne Marie Conte, an independent candidate, was elected as a councillor of Arvada (Colorado), becoming the first openly trans person to be elected to public office in the US.",
        text: "",
        image: "",
        links: ["KatiaTapety"]
    },

    {
        id: "KatiaTapety",
        year: "1993",
        type: "down",
        anchor: "GeorginaBeyer",
        title: "Brazil",
        bottomTitle: "In 1993, Kátia Tapety, at the time a candidate for the Democrats, became the first transgender politician elected in Brazil.",
        text: "",
        image: "",
        links: ["MarkRees"]
    },

    {
        id: "MarkRees",
        year: "1994",
        type: "up",
        anchor: "MarieConte",
        title: "UK",
        bottomTitle: "In 1994, Mark Rees was elected as a councillor for Tunbridge Wells Borough for the Liberal Democrats. He was the first openly trans man to be elected in the UK.",
        text: "",
        image: "",
        links: ["GeorginaBeyer"]
    },


    {
        id: "GeorginaBeyer",
        year: "1995",
        type: "main",
        title: "Carterton",
        bottomTitle: "In 1995, Georgina Beyer of Carterton, a member of the New Zealand Labour Party, became the world's first openly transgender mayor. And in 1999 will become the first openly transgender member of parliament.",
        text: "",
        image: "",
        links: ["RachaelWebb"]
    },

    {
        id: "KamlaJaan",
        year: "2000",
        type: "up",
        anchor: "NewEqualTreatment",
        title: "India",
        bottomTitle: " In 2000, Kamla Jaan was elected mayor of Katni, becoming the first openly transgender mayor in India.",
        text: "",
        image: "",
        links: ["GeorginaBeyer"]
    },

    {
        id: "MonicaHelms",
        year: "1999",
        type: "up",
        anchor: "TransFlag",
        title: "Phoenix",
        bottomTitle: "In 1999, Monica Helms, an American trans woman and graphic designer, created the Trans Flag in reaction to the absence of any unified flag for trans rights.",
        text: " She explained its meaning through the combination of both genders (symbolized by blue and pink), combined with white representing transition and intersexuation.",
        image: "",
        links: ["TransFlag"]
    },

    {
        id: "JohnathanAndrew",
        year: "1999",
        type: "down",
        anchor: "TransFlag",
        title: "San-Francisco",
        bottomTitle: " At the same time, in San Francisco, Jonathan Andrew, a trans man, created a quite similar flag. He published it on his website (Adventures in Boyland).",
        text: "",
        image: "",
        links: ["TransFlag"]
    },

    {
        id: "TransFlag",
        year: "2000",
        type: "main",
        title: "Phoenix",
        bottomTitle: "The transgender pride flag (Monica Helms) is first shown at Pride in Phoenix.",
        text: "",
        image: "",
        links: [""]
    },

    {
        id: "CamilleCabral",
        year: "2001",
        type: "down",
        anchor: "NewEqualTreatment",
        title: "Paris",
        bottomTitle: " In 2001, in France, Camille Cabral, a French-Brazilian politician and dermatologist, was elected as a councillor of the 17th arrondissement of Paris.",
        text: "She was the first trans woman elected in France.",
        image: "",
        links: [""]
    },

    {
        id: "NewEqualTreatment",
        year: "2002",
        type: "main",
        title: "European Union",
        bottomTitle: "In 2002, the European 1976 Equal Treatment Directive was modified in order to include discrimination based on gender identity.",
        text: "",
        image: "",
        links: [""]
    },

       {
        id: "Goodwin",
        year: "2002",
        type: "up",
        anchor :"GenderRecognition",
        title: "United-Kingdom",
        bottomTitle: "In a case opposing Christine Goodwin, a trans woman facing sexual harassment at work because of the absence of legal recognition of trans identity in the UK, and her Country.",
        text: "The European Court of Human Rights stated that the UK's refusal to recognized a post-transition trans woman violated the European Convention of Human Rights.",
        image: "",
        links: ["NewEqualTreatment"]
    },
   
    {
        id: "GenderRecognition",
        year: "2004",
        type: "main",
        title: "United-Kingdom",
        bottomTitle: "In 2004, following the Goodwin V UK, the UK government ruled the Gender Recognition Act, allowing trans people to obtain legal recognition of their gender through a Gender Recognition Certificate.",
        text: "",
        image: "",
        links: ["Goodwin"]
    },

    {
        id: "AyaKamikawa",
        year: "2003",
        type: "down",
        anchor: "GenderRecognition",
        title: "Tokyo",
        bottomTitle: "In 2003, Aya Kamikawa was elected as an assembly member of Setagaya (Tokyo).",
        text: "She was the first openly transgender person to seek or win elected office in Japan.",
        image: "",
        links: [""]
    },
{
        id: "Japan",
        year: "2004",
        type: "main",
        title: "Japan",
        bottomTitle: "Legal gender recognition is made possible under the new Gender Identity Disorder Special Cases Act.",
        text: "However the law required, sterilisation, being unmarried and was strictly forbidden to children.",
        image: "",
        links: ["AyaKamikawa"]
    },

{
        id: "Nepal",
        year: "2007",
        type: "up",
        anchor:"Argentina",
        title: "Nepal",
        bottomTitle: "The Supreme Court recognized a third gender category and order legal recognition for gender-diverse people. ",
        text: "",
        image: "",
        links: [""]
    },

    {
        id: "Argentina",
        year: "2012",
        type: "main",
        title: "Argentina",
        bottomTitle: "is one of the first country adopting a self-determination laws, allowing legal gender change without surgery/sterilisation or psychiatric diagnosis.",
        text: "",
        image: "",
        links: [""]
    },

    {
        id: "DSM5",
        year: "2013",
        type: "main",
        title: "World",
        bottomTitle: "In 2013 the DSM-5 is renaming the diagnostic Gender Identity Disorder to Gender Dysphoria and removed it from the Sexual Disorder category in order to reduce the stigma associated with the terms disorder.",
        text: "The fifth edition of the DSM is also the first one that doesn't include any mention of homosexuality as a disorder.",
        image: "",
        links: [""]
    },

      {
        id: "India",
        year: "2014",
        type: "down",
        anchor :"Who",
        title: "India",
        bottomTitle: " The Supreme Court recognize trans people as a third gender category and order affirm constitutional protections.",
        text: "",
        image: "",
        links: [""]
    },

    {
        id: "Who",
        year: "2018",
        type: "main",
        title: "World",
        bottomTitle: "In 18 June 2018, the World Health Organization official announced the suppression of all trans-related categories from the Mental and Behavioural Disorders Chapter from their annual report. ",
        text: "This decision is a major change in the dépathologisation of Trans Identity. ",
        image: "",
        links: ["DSM5"]
    },

    {
        id: "Hungary",
        year: "2020",
        type: "main",
        title: "Hungary",
        bottomTitle: "the Orban Government banned the right for trans people to legally change gender.",
        text: "",
        image: "",
        links: [""]
    },

      {
        id: "Japan2023",
        year: "2023",
        type: "up",
        anchor:"EuCourt",
        title: "Japan",
        bottomTitle: " the Japan Supreme Court declared the sterilisation requirement for trans people wishing to legally change their gender unconstitutional.",
        text: "",
        image: "",
        links: ["Japan"]
    },

    {
        id: "EuCourt",
        year: "2024",
        type: "main",
        title: "European Union",
        bottomTitle: "October 2024 the European Court of Justice ruled that every EU member states must recognise changes of names and gender markers obtained in other member states.",
        text: "",
        image: "",
        links: [""]
    },

     {
        id: "ExectutiveOrder14168",
        year: "January 2025",
        type: "main",
        title: "USA",
        bottomTitle: "20th January 2025, Donald Trump signed the Executive Order 14168, stating the existence of only two gender, ignoring the scientific reality of intersexuation, but also directly threating the recognition of trans and non binary people.",
        text: "This Executive order lead to the suppression of the X mention on passport but also to the rewriting of existing passport for trans people, acknowledging only the birth gender.",
        image: "",
        links: [""]
    },

    {
        id: "UKSupremeCourt",
        year: "April 2025",
        type: "main",
        title: "United Kingdom",
        bottomTitle: "In April 2025, the UK Supreme Court ruled that the terms woman and sex in the Equality Act 2010 refer to biological sex, even for holders of a Gender Recognition Certificate.",
        text: "The decision had major implications for access to single-sex spaces and public services. Including for exemple forbidding the access of woman's toilet to trans woman.",
        image: "",
        links: [""]
    },

       {
        id: "TransWomanasWoman",
        year: "12th February 2026",
        type: "main",
        title: "European Union",
        bottomTitle: "On the afternoon of the 12 February 2026, the European Parliament voted the Recognition of Trans Woman as Woman.",
        text: "",
        image: "",
        links: [""]
    },




];

const timeline =
    document.getElementById("timeline");

const sideEvents =
    document.getElementById("sideEvents");

const miniTimeline =
    document.getElementById("miniTimeline");

const mainEvents =
    events.filter(event => event.type === "main");

const floatingEvents =
    events.filter(event => event.type !== "main");

/* CREATE EVENTS */
mainEvents.forEach(event => {

    const div =
        document.createElement("div");

    div.className = `event ${event.type}`;
    div.id = event.id;

    div.innerHTML = `

<div class="eventTop">

    ${event.image
            ?
            `<img src="${event.image}">`
            :
            ""
        }

    <h2>
        ${event.year} — ${event.title}
    </h2>

</div>

<div class="eventBottom">

    <div class="bottomHeadline">
        ${event.bottomTitle || ""}
    </div>

    <div class="bottomText">
        ${event.text}
    </div>

</div>

`;

    timeline.appendChild(div);

});

floatingEvents.forEach(event => {

    const div =
        document.createElement("div");

    div.className = `event ${event.type}`;
    div.id = event.id;

    div.innerHTML = `

<div class="eventTop">

    ${event.image
            ?
            `<img src="${event.image}">`
            :
            ""
        }

    <h2>
        ${event.year} — ${event.title}
    </h2>

</div>

<div class="eventBottom">

    <div class="bottomHeadline">
        ${event.bottomTitle || ""}
    </div>

    <div class="bottomText">
        ${event.text}
    </div>

</div>

`;

    sideEvents.appendChild(div);

});

/* CREATE MINI TIMELINE */

mainEvents.forEach(event => {

    const date =
        document.createElement("div");

    date.className = "miniDate";

    date.textContent =
        event.year;

    miniTimeline.appendChild(date);

});

/* HORIZONTAL SCROLL */

const wrapper =
    document.getElementById("timelineWrapper");

window.addEventListener("wheel", e => {

    e.preventDefault();

    wrapper.scrollLeft -= e.deltaY;

}, { passive: false });

/* DRAW CONNECTIONS */

function drawConnections() {

    const svg =
        document.getElementById("connections");

    svg.innerHTML = "";

    svg.setAttribute(
        "width",
        timeline.scrollWidth
    );

    svg.setAttribute(
        "height",
        wrapper.clientHeight
    );

    const timelineRect =
        timeline.getBoundingClientRect();

    const centerY =
        timelineRect.height / 2;

    events.forEach(event => {

        const source =
            document.getElementById(event.id);

        if (!source) return;

        const sourceRect =
            source.getBoundingClientRect();

        event.links.forEach(targetId => {

            const target =
                document.getElementById(targetId);

            if (!target) return;

            const targetRect =
                target.getBoundingClientRect();

            const x1 =
                sourceRect.left -
                timelineRect.left +
                24;

            const x2 =
                targetRect.left -
                timelineRect.left +
                24;

            const y1 =
                sourceRect.top +
                sourceRect.height / 2;

            const y2 =
                targetRect.top +
                targetRect.height / 2;

            const path =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "path"
                );

            const curve =

                `M ${x1} ${y1}
             C ${(x1 + x2) / 2} ${y1 - 140},
               ${(x1 + x2) / 2} ${y2 - 140},
               ${x2} ${y2}`;

            path.setAttribute("d", curve);

            svg.appendChild(path);

        });

    });

}

function positionSideEvents() {

    floatingEvents.forEach(event => {

        const anchor =
            document.getElementById(event.anchor);

        const element =
            document.getElementById(event.id);

        if (!anchor || !element) return;

        const anchorLeft =
            anchor.offsetLeft;

        const offsetX = 300;

        if (event.type === "up") {

            element.style.left =
                `${anchorLeft + offsetX}px`;

            element.style.top =
                `-90px`;
        }

        if (event.type === "down") {

            element.style.left =
                `${anchorLeft + offsetX}px`;

            element.style.top =
                `230px`;

        }

    });

}

window.addEventListener("load", () => {

    positionSideEvents();

    drawConnections();

});

window.addEventListener("resize", () => {

    positionSideEvents();

    drawConnections();

});

wrapper.addEventListener(
    "scroll",
    drawConnections
);

wrapper.addEventListener(
    "scroll",
    positionSideEvents
);
