function onInit() {
    renderPortfolio();
}

function renderPortfolio() {
    var projs = getProjsForDisplay();
    var strHtmls = projs.map(function (proj, idx) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onShowModal('${proj.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="${proj.url}" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">Illustration</p>
          </div>
        </div>
        `
    })
    document.querySelector('.project-container').innerHTML = strHtmls.join('')
}

function onShowModal(projId) {
    var proj = getProjById(projId);

    var strHtml =
        `<h2>Project Name</h2>
    <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
    <img class="img-fluid d-block mx-auto" src="img/proj/${proj.title}.JPG" alt="">
    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
    Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt 
    officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
    <ul class="list-inline">
        <li>Date: January 2017</li>
        <li>Client: Threads</li>
        <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close Project</button>`;
    document.querySelector('.modal-body').innerHTML = strHtml.join('');

}

function onSendForm() {
    var elMail = document.querySelector('input[name="E-mail"]');
    var elSub = document.querySelector('input[name="Subject"]');
    var elMsg = document.querySelector('textarea[name="Message"]');
    var elError = document.querySelector('.form-error');
    var validMailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!validMailRegex.test(elMail.value)) return showFormError ('mail');
    else if (!elMsg.value) return showFormError('msg');
    else {
        window.open (`https://mail.google.com/mail/?view=cm&fs=1&to=Gilhershk11@gmail.com&su=${elSub.value}&body=${elMsg.value}`) 
        elMail.value = '';
        elSub.value = '';
        elMsg.value = '';
        elError.innerText = '';
        // openCanvas();
    }
}


function showFormError(errorType) {
    var elError = document.querySelector('.form-error')
    if (errorType === 'mail') {
        elError.innerText = 'Please enter valid email.'
    } else {
        elError.innerText = 'Can\'t send empty message';
    }
}
