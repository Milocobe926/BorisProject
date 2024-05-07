languageSelector = document.getElementById("language-selector");
content = document.getElementById("content");
PAboutboris = document.getElementById("p-about-boris");
aboutBoris = document.getElementById("about-boris");
homeItem = document.getElementById("home-item");
dashboardItem = document.getElementById("dashboard-item");
aboutUs = document.getElementById("about-us-item");
pageItem = document.getElementById("page-item");
youKnow = document.getElementById("you_know");
emojiYouKnow = document.getElementById("emoji_container");
emoji = document.getElementById("emoji");
swt = 0;
pTitle = document.getElementById("p-title");
data1 = document.getElementById("data-1");
data2 = document.getElementById("data-2");
data3 = document.getElementById("data-3");
dataP = document.getElementById("data-p");
lenguageButton = document.getElementById("lenguage-icon");
flag = 0;
lenguageFlag = 0;
h3Important = document.getElementById("h3-important");
dataTitle = document.getElementById("data-title");
knowMore=document.getElementById("know-more");
dataBtn = document.getElementById("data-btn");

emoji.addEventListener("click", () => {
    youKnow.style.display = "flex";
})

data1.addEventListener("click", () => {
    data3.style.color = "var(--main-text-color)"
    data1.style.color = "white"
    data2.style.color = "var(--main-text-color)"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Ground Decision`
        dataP.textContent = `The data provide a solid foundation for making informed decisions in environmental management. They allow for identifying problems, evaluating trends, and designing effective strategies to address environmental challenges.`
    } else {
        pTitle.textContent = `Fundamentan Decisiones:`
        dataP.textContent = `Los datos proporcionan una base sólida para tomar decisiones informadas en la
        gestión ambiental.
        Permiten identificar problemas,
        evaluar tendencias y diseñar estrategias efectivas para abordar desafíos ambientales.`
    }
})

data2.addEventListener("click", () => {
    data3.style.color = "var(--main-text-color)"
    data1.style.color = "var(--main-text-color)"
    data2.style.color = "White"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Improved Precision`
        dataP.textContent = `By having accurate and up-to-date data, the precision of the analyses and models used by BORIS is enhanced. This translates into more effective solutions and the ability to forecast and mitigate environmental impacts`
    } else {
        pTitle.textContent = "Mejoran la Precisión:"
        dataP.textContent = `Al contar con datos precisos y actualizados, se mejora la precisión de los
        análisis y modelos utilizados por BORIS. Esto se
        traduce en soluciones más efectivas y en la capacidad de prever y mitigar impactos ambientales.`
    }
})

data3.addEventListener("click", () => {
    data1.style.color = "var(--main-text-color)"
    data2.style.color = "var(--main-text-color)"
    data3.style.color = "White"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Enable Collaboration:`
        dataP.textContent = `Data shared through official platforms fosters collaboration among public entities, private organizations, and civil society. This enables working together in the pursuit of comprehensive and sustainable environmental solutions.`
    } else {
        pTitle.textContent = `Facilitan la Colaboración:`
        dataP.textContent = `Los datos compartidos a través de plataformas oficiales fomentan la colaboración
        entre entidades públicas, privadas y la sociedad civil.
        Esto permite trabajar de manera conjunta en la búsqueda de soluciones ambientales integrales y
        sostenibles.`
    }
});

you_know.addEventListener("click", () => {
    youKnow.style.cursor = "auto"
    emojiYouKnow.style.width = "370px";
    emojiYouKnow.style.height = "480px";
    you_know.style.height = "410px";
    you_know.style.width = "330px";
    emoji.textContent = "😁"
    you_know.innerHTML =
        `<span id="know-close" class="know-close">✖️</span>Los datos utilizados por BORIS para llevar a cabo sus análisis y servicios provienen de
    fuentes confiables y verificadas. En particular, la empresa extrae información relevante de la página web
    <a class="medata-url"href="http://medata.gov.co/search/?publisher__name=Medell%C3%8Dn%20en%20Cifras">MEDATA</a>
    la cual es una plataforma oficial que recopila datos sobre Medellín y sus cifras clave en diversos ámbitos.
    Estos datos son fundamentales para el desarrollo de soluciones efectivas en la gestión ambiental y la toma
    de decisiones informadas para mejorar la calidad de vida en la ciudad y sus alrededores.`
    close()
});

function close() {
    knowClose = document.getElementById("know-close");
    knowClose.addEventListener("click", () => {
        youKnow.style.display = "none";
    }
    )
}

document.getElementById("btn-español").addEventListener("click", () => {
    flag = 1;
    localStorage.setItem("flag", flag);
    languageSelector.style.display = "none";
    content.style.display = "block";
});

document.getElementById("btn-ingles").addEventListener("click", () => {
    lenguageFlag = 1;
    flag = 1;
    localStorage.setItem("lenguageFlag",lenguageFlag)
    localStorage.setItem("flag", flag);
    languageSelector.style.display = "none";
    content.style.display = "block";
    homeItem.textContent = "Home";
    aboutUs.textContent = "About us"
    pageItem.textContent = "Home"
    dashboardItem.textContent = "Dashboard"
    dataTitle.textContent = "DATA"
    h3Important.textContent = "THE IMPORTANCE OF DATA"
    aboutBoris.textContent = "about BORIS";
    PAboutboris.textContent = "BORIS, a Colombian company, experts committed to data analysis and smart solutions for socio-environmental management. Our mission is to develop a record base that enhances human impact on the environment and society. We collaborate with various sectors to promote sustainability and responsible development. We are guided by transparency, ethics, and the desire to build a better future for all."
    pTitle.textContent = `Ground Decision`
    dataP.textContent = `The data provide a solid foundation for making informed decisions in environmental management. They allow for identifying problems, evaluating trends, and designing effective strategies to address environmental challenges.`
    knowMore.textContent = "Know More"
    dataBtn.textContent = "More Information"
})

document.addEventListener("DOMContentLoaded",()=>{
    lenguageFlag2 = localStorage.getItem("lenguageFlag");
    if (lenguageFlag2 == 1){
        languageSelector.style.display = "none";
        content.style.display = "block";
        homeItem.textContent = "Home";
        aboutUs.textContent = "About us"
        pageItem.textContent = "Home"
        dashboardItem.textContent = "Dashboard"
        dataTitle.textContent = "DATA"
        h3Important.textContent = "THE IMPORTANCE OF DATA"
        aboutBoris.textContent = "about BORIS";
        PAboutboris.textContent = "BORIS, a Colombian company, experts committed to data analysis and smart solutions for socio-environmental management. Our mission is to develop a record base that enhances human impact on the environment and society. We collaborate with various sectors to promote sustainability and responsible development. We are guided by transparency, ethics, and the desire to build a better future for all."
        pTitle.textContent = `Ground Decision`
        dataP.textContent = `The data provide a solid foundation for making informed decisions in environmental management. They allow for identifying problems, evaluating trends, and designing effective strategies to address environmental challenges.`
        knowMore.textContent = "Know More"
        dataBtn.textContent = "More Information"
    }
})

lenguageButton.addEventListener("click", () => {
    flag = 0;
    localStorage.setItem("flag", flag);
    location.reload();
})

flag2 = localStorage.getItem("flag");

if (flag2 == 1) {
    languageSelector.style.display = "none";
    content.style.display = "block";
}