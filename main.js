
document.getElementById("phoneNum").onmouseover = function () {
    this.innerText = "+966-53-775-8721";
};
document.getElementById("phoneNum").onmouseout = function () {
    this.innerText = " +123-456-7890";
};

document.getElementById("email").onmouseover = function () {
    this.innerText = "NajwaBuayjan@gmail.com";
};
document.getElementById("email").onmouseout = function () {
    this.innerText = "hello@reallygreatsite.com";
};
document.getElementById("location").onmouseover = function () {
    this.innerText = "Riyadh";
};
document.getElementById("location").onmouseout = function () {
    this.innerText = " 123 Anywhere St., Any City";
};
document.getElementById("website").onmouseover = function () {
    this.innerText = " www.Najwa.com";
};
document.getElementById("website").onmouseout = function () {
    this.innerText = " www.reallygreatsite.com";
};

let skillsUl = document.getElementById('skills')
let skillsli = skillsUl.getElementsByTagName("li")

let mySkillsLits = ['css', 'html', 'js', 'react', '.net', 'java', 'c++']

let skillsLits = ['Project Management', 'Public Relations', 'Teamwork', 'Time Management', 'Leadership', 'Effective Communication', 'Critical Thinking']

for (let i = 0; i < skillsli.length; i++) {
    skillsli[i].onmouseover = function () {
        this.innerText = mySkillsLits[i];
    };
    skillsli[i].onmouseout = function () {
        this.innerText = skillsLits[i];
    };
}

let langUl = document.getElementById('lang')
let langli = langUl.getElementsByTagName("li")

let myLangLits = ['Arabic (Fluent)', 'English (Intermediate)', 'Arabic (Fluent)', 'Arabic (Fluent)']

let langLits = ['English (Fluent)', 'French (Fluent)', 'German (Basics)', 'Spanish (Intermediate)']

for (let i = 0; i < langli.length; i++) {
    langli[i].onmouseover = function () {
        this.innerText = myLangLits[i];
    };
    langli[i].onmouseout = function () {
        this.innerText = langLits[i];
    };
}

// section two 

document.getElementById("name").onmouseover = function () {
    this.innerHTML = "<span>Najwa </span> Almutairi ";
};
document.getElementById("name").onmouseout = function () {
    this.innerHTML = "<span>Richard </span> Sanchez";
};

document.getElementById("title").onmouseover = function () {
    this.innerText = "Full Stack developer";
};
document.getElementById("title").onmouseout = function () {
    this.innerText = "Marketing Manager";
};

document.getElementById("profile").onmouseover = function () {
    this.innerText = `My Name is Najwa Almutairi, i have a bachelor degree in Information Systems,
                       and I am always eager to embrace new opportunities for growth and learning.`;
};
document.getElementById("profile").onmouseout = function () {
    this.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Lorem
    ipsum
    dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation. Ut enim ad minim
    veniam
    quis nostrud exercitation.`;
};

document.getElementById("company").onmouseover = function () {
    this.innerText = "Tuwaiq Student";
};
document.getElementById("company").onmouseout = function () {
    this.innerText = "Borcelle Studio";
};
document.getElementById("date").onmouseover = function () {
    this.innerText = "2024 - Present";
};
document.getElementById("date").onmouseout = function () {
    this.innerText = "2030 - Present";
};
document.getElementById("companyTitle").onmouseover = function () {
    this.innerText = "JavaScript FullStack bootcamp";
};
document.getElementById("companyTitle").onmouseout = function () {
    this.innerText = "Marketing Manager & Specialist";
};
let companyUl = document.getElementById('companyList')
let companyli = companyUl.getElementsByTagName("li")

let mycompanyLits = ['Develop and execute FrontEnd projects, using HTML,CSS,JavaScript',
    'Learning JavaScript API',
    'Learning React.',
    'test']

let companyLits = [`Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives`
    , `Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI`,
    `Lead, mentor, and manage a high-performing marketing team, fostering a
                                        collaborative and results-driven work environment.`,
    `Monitor brand consistency across marketing channels and materials.`]

for (let i = 0; i < companyli.length; i++) {
    companyli[i].onmouseover = function () {
        this.innerText = mycompanyLits[i];
    };
    companyli[i].onmouseout = function () {
        this.innerText = companyLits[i];
    };
}
document.getElementById("company2").onmouseover = function () {
    this.innerText = "STC";
};
document.getElementById("company2").onmouseout = function () {
    this.innerText = "Fauget Studio";
};
document.getElementById("date2").onmouseover = function () {
    this.innerText = "2022 - 2023";
};
document.getElementById("date2").onmouseout = function () {
    this.innerText = "2025 - 2029";
};
document.getElementById("companyTitle2").onmouseover = function () {
    this.innerText = "developer";
};
document.getElementById("companyTitle2").onmouseout = function () {
    this.innerText = "Marketing Manager & Specialist";
};

let companyUl2 = document.getElementById('companyList2')
let companyli2 = companyUl2.getElementsByTagName("li")

let mycompanyLits2 = ['test',
    'test',
    'test']

let companyLits2 = [`Create and manage the marketing budget, ensuring efficient allocation of resources and optimizing ROI`,
    `Oversee market research to identify emerging trends, customer needs, and
    competitor strategies.`,
    `Monitor brand consistency across marketing channels and materials.`]

for (let i = 0; i < companyli2.length; i++) {
    companyli2[i].onmouseover = function () {
        this.innerText = mycompanyLits2[i];
    };
    companyli2[i].onmouseout = function () {
        this.innerText = companyLits2[i];
    };
}


document.getElementById("company3").onmouseover = function () {
    this.innerText = "test company";
};
document.getElementById("company3").onmouseout = function () {
    this.innerText = "Studio Shodwe";
};
document.getElementById("date3").onmouseover = function () {
    this.innerText = "2022 - 2023";
};
document.getElementById("date3").onmouseout = function () {
    this.innerText = "2024 - 2025";
};
document.getElementById("companyTitle3").onmouseover = function () {
    this.innerText = "test";
};
document.getElementById("companyTitle3").onmouseout = function () {
    this.innerText = "Marketing Manager & Specialist";
};

let companyUl3 = document.getElementById('companyList3')
let companyli3 = companyUl3.getElementsByTagName("li")

let mycompanyLits3 = ['test',
    'test']

let companyLits3 = [`Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives.`,
    `Monitor and maintain brand consistency across all marketing channels and materials`]

for (let i = 0; i < companyli3.length; i++) {
    companyli3[i].onmouseover = function () {
        this.innerText = mycompanyLits3[i];
    };
    companyli3[i].onmouseout = function () {
        this.innerText = companyLits3[i];
    };
}


document.getElementById("refname").onmouseover = function () {
    this.innerText = "Ali Almutairi";
};
document.getElementById("refname").onmouseout = function () {
    this.innerText = "Estelle Darcy";
};
document.getElementById("refpos").onmouseover = function () {
    this.innerText = "developer";
};
document.getElementById("refpos").onmouseout = function () {
    this.innerText = "Wardiere Inc./CTO";
};
document.getElementById("refNo").onmouseover = function () {
    this.innerHTML = "<b>Phone</b> 053-775-7821 ";
};
document.getElementById("refNo").onmouseout = function () {
    this.innerHTML = "<b>Phone</b> 123-456-7890";
};
document.getElementById("refEmail").onmouseover = function () {
    this.innerHTML = "<b>Email</b> Ali@gmail.com ";
};
document.getElementById("refEmail").onmouseout = function () {
    this.innerHTML = "<b>Email</b> hello@reallygreatsite.com";
};

document.getElementById("refname2").onmouseover = function () {
    this.innerText = "SARA";
};
document.getElementById("refname2").onmouseout = function () {
    this.innerText = "Harper Richard";
};
document.getElementById("refpos2").onmouseover = function () {
    this.innerText = "HR Specialist";
};
document.getElementById("refpos2").onmouseout = function () {
    this.innerText = "Wardiere Inc./CEO";
};
document.getElementById("refNo2").onmouseover = function () {
    this.innerHTML = "<b>Phone</b> 053-775-7821 ";
};
document.getElementById("refNo2").onmouseout = function () {
    this.innerHTML = "<b>Phone</b> 123-456-7890";
};
document.getElementById("refEmail2").onmouseover = function () {
    this.innerHTML = "<b>Email</b> SARA@gmail.com ";
};
document.getElementById("refEmail2").onmouseout = function () {
    this.innerHTML = "<b>Email</b> hello@reallygreatsite.com";
};