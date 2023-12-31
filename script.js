
document.addEventListener('DOMContentLoaded', () => {

    //Como coloquei o script tag dentro da head, tenho de assegurar que o JavaScript só é interpretado depois do carregamento do DOM ser concluído

    let navLinks = document.querySelectorAll('.nav-options li');
    
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', () => {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            navLink.classList.add('active');
        });
    });

    //Dark Mode & Light Mode
    let button = document.querySelector("#btn");
    let body = document.querySelector('body');

    let image = document.querySelector('.svg-icon');
    let currentTheme = document.querySelector('.current-theme');

    button.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if(body.classList.contains('light-mode')){
            image.setAttribute('src', 'images/icon-moon.svg');
            image.setAttribute('height', '20px');
            currentTheme.innerHTML = "Dark mode";
        }else{
            image.setAttribute('src', 'images/icon-sun.svg');
            currentTheme.innerHTML = "Light mode";
        };   
    });

    //PROBLEMA: quando mudo para light mode e carrego na home, muda para as cores da root

    //Prevent Refresh
    let submitBtn = document.querySelector('button[type="submit"]');
    
    submitBtn.addEventListener('click', (eventObject) => {
        eventObject.preventDefault();
    });






    //Vou criar um array de objetos com a info para a timeline
    let timeEvents = [
        {
            dates: 'Sept. 2023 - Current',
            event: 'Backend Developer Intern',
            location: 'BLIP',
            description: [

            ]
        },
        {
            dates: 'April 2023 - Sept. 2023',
            event: 'Junior Frontend Developer',
            location: 'Actuasys',
            description: [
                'Design and client-side development of the new Essential App module Schedule Exchange, using Angular and Material Design',
                'Collaboration with an Agile team of experienced developers',
            ]
        },
        {   
            dates: '2022 - 2023',
            event: 'Frontend Development',
            location: 'Self-taught',
            description: [
                'HTML, CSS, JavaScript',
            ]
        },
        {   
            dates: '2020 - 2021',
            event: 'M. Bioinformatics and Computational Biology',
            location: 'Faculty of Sciences of the University of Porto',
            description: [
                '(Project 2) sPLA2 - Homollogy Modelling, Molecular Docking & Virtual Screening; DszB reaction mechanism - QM/MM Methods',
                '(Project 1) HIV-1 Protease-Nelfinavir - Molecular Mechanics & Molecular Dynamics'
            ]
        },
        {
            dates: '2016 - 2019',
            event: 'B. Biotechnology',
            location: 'University of Aveiro',
            description: [
                'Publication: Step-by-step design of proteins for small molecule interaction: a review on recent milestones José M. Pereira, Maria R. Vieira, Sérgio M. Santos',
                '(Project 0) Computational determination of protein folding, for application in the design of synthetic peptides.'
            ]
        },
    ];

    const timeline = document.querySelector('.education-timeline');
    let position = 'right';

    timeEvents.forEach(object => {
        let timeEvent = document.createElement('div');
        timeEvent.classList.add('time-event');

        position === 'right' ? timeEvent.style.right = '5%' : timeEvent.style.left = '5%';
        
        position === 'right' ? position = 'left' : position = 'right';

        let dates = document.createElement('div');
        dates.classList.add('dates');
        let h4 = document.createElement('h4');
        h4.innerText = object.dates;
        dates.appendChild(h4);

        let description = document.createElement('div');
        description.classList.add('description');
        let h3D = document.createElement('h3');
        h3D.innerText = object.event;
        description.appendChild(h3D);

        if(object.location){
            let h5D = document.createElement('h5');
            h5D.innerText = object.location;
            h5D.style.paddingBottom = "1em";
            description.appendChild(h5D);
        };

        object.description.forEach(element => {
            let p = document.createElement('p');
            p.innerText = element;
            description.appendChild(p);
        });
        
        timeEvent.appendChild(dates);
        timeEvent.appendChild(description);
        timeline.appendChild(timeEvent);
    });

});