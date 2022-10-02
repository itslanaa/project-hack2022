<template>
  <div>
    <div class="border-left-2 page-section pl-32pt">
  
      <div class="d-flex align-items-center page-num-container mb-16pt">
        <div class="page-num">2</div>
        <h4 v-text="$t('question', { question: 2, total: 5 })" />
      </div>

      <p class="text-70 measure-lead mb-32pt mb-lg-48pt">An angular 2 project written in typescript is* transpiled to javascript duri*ng the build process. Which of the following additional features are provided to the developer while programming on typescript over javascript?</p>

      <ul class="list-quiz">
        <li class="list-quiz-item">
          <span class="list-quiz-badge">A</span>  
          <span class="list-quiz-text">Ability to use newer syntax and offers reliability</span>
        </li>
        <li class="list-quiz-item active">
          <span class="list-quiz-badge bg-primary text-white"><i class="material-icons">check</i></span>  
          <span class="list-quiz-text">Compatibility</span>
        </li>
        <li class="list-quiz-item">
          <span class="list-quiz-badge">C</span>  
          <span class="list-quiz-text">Usage of missing features</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "question": "Question {question} of {total}"
    },
    "ro": {
      "question": "Întrebarea {question} din {total}"
    }
  }
</i18n>