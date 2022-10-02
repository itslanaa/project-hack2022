<template>
  <div>
    <div class="mb-24pt">
      <a class="chip chip-outline-secondary">Design</a>
      <a class="chip chip-outline-secondary">Sketch</a>
    </div>

    <div class="d-flex flex-column flex-md-row align-items-md-center mb-16pt">
      <div class="mb-16pt mb-md-0 mr-md-16pt">
        <div class="rounded p-relative o-hidden overlay overlay--primary">
          <img 
            class="img-fluid rounded" 
            src="/images/paths/sketch_200x168.png" 
            alt="image"> 
          <div class="overlay__content" />
        </div>
      </div>
      <div class="flex">
        <p class="lead measure-paragraph-max">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus culpa deserunt distinctio, eos expedita inventore labore laborum libero magnam nisi recusandae sapiente sunt unde, voluptatibus? Accusantium distinctio laborum nihil, nostrum possimus quos rem repellendus tenetur voluptatem! A, ad adipisci commodi doloribus id maxime provident quo suscipit. Itaque, recusandae ut.</p>
      </div>
    </div>

    <blockquote class="blockquote blockquote--reverse pl-0">
      <p class="text-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis distinctio earum et fugiat id itaque officia provident quasi! Dolorem, fuga modi molestias natus non nulla optio porro praesentium provident quaerat.</p>
      <footer class="blockquote-footer">Someone famous in
        <cite title="Source Title">Source Title</cite>
      </footer>
    </blockquote>

    <p class="text-50 measure-paragraph-max mb-24pt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dignissimos eaque facilis inventore ipsa modi natus, optio quisquam quod quos, ratione sed, ullam veritatis. Delectus dolorem doloremque, doloribus explicabo facere fugiat, incidunt ipsam maiores minima modi molestias natus quia quis recusandae rem reprehenderit saepe sint sunt tenetur velit voluptate voluptatum!</p>

    <h4>Labore nemo nisi recusandae</h4>

    <div class="d-flex flex-column flex-md-row mb-32pt">
      <div class="flex mb-16pt mb-md-0 mr-md-16pt">
        <p class="lead text-70 measure-paragraph-max">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, accusamus culpa deserunt distinctio, eos expedita inventore labore laborum libero magnam nisi recusandae sapiente sunt unde, voluptatibus? Accusantium distinctio laborum nihil, nostrum possimus quos rem repellendus tenetur voluptatem! A, ad adipisci commodi doloribus id maxime provident quo suscipit. Itaque, recusandae ut.</p>

        <blockquote class="blockquote">
          <p class="text-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis distinctio earum et fugiat id itaque officia provident quasi! Dolorem, fuga modi molestias natus non nulla optio porro praesentium provident quaerat.</p>
          <footer class="blockquote-footer">Someone famous in
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
      <div>
        <div class="rounded p-relative o-hidden overlay overlay--primary">
          <img 
            class="img-fluid rounded" 
            src="/images/paths/invision_200x168.png" 
            alt="image"> 
          <div class="overlay__content" />
        </div>
      </div>
    </div>

    <div class="measure-lead-max">

      <div 
        v-if="author"
        class="mb-8pt">
        <author-basic />
      </div>

      <page-separator
        :title="$t('Comments')" />

      <div class="d-flex mb-24pt">
        <fmv-avatar
          size="sm"
          title="LB"
          circle
          class="mr-12pt" />

        <div class="flex">
          <div class="form-group">
            <label 
              for="comment" 
              class="form-label">Your comment</label>
            <textarea
              id="comment" 
              class="form-control" 
              name="comment" 
              rows="3" 
              placeholder="Type here to leave a comment ..." />
          </div>
          <button class="btn btn-outline-secondary">Post comment</button>
        </div>
      </div>
      <div class="pt-3 mb-24pt">
        <h4>2 Comments</h4>
        <div class="d-flex mb-3">
          <fmv-avatar
            size="sm"
            circle
            title="JF"
            class="mr-12pt" />

          <div class="flex">
            <a class="text-body"><strong>Joseph S. Ferland</strong></a><br>
            <p class="mt-1 text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero neque magnam modi corrupti in aliquid odit eligendi pariatur! Ad consequatur illo voluptates, dignissimos tenetur odit magni excepturi! Nesciunt, fuga, vel.</p>
            <div class="d-flex align-items-center">
              <small class="text-50 mr-2">27 min ago</small>
              <a class="text-50"><small>Liked</small></a>
            </div>
          </div>
        </div>

        <div class="ml-sm-32pt mt-3 card p-3">
          <div class="d-flex">
            <fmv-avatar
              size="sm"
              circle
              title="FM"
              class="mr-12pt" />

            <div class="flex">
              <div class="d-flex align-items-center">
                <a class="text-body"><strong>FrontendMatter</strong></a>
                <small class="ml-auto text-muted">just now</small>
              </div>
              <p class="mt-1 text-70">Hi Joseph,<br> Thank you for purchasing our course! <br><br>Please have a look at the charts library documentation <a href="#">here</a> and follow the instructions.</p>

              <div class="d-flex align-items-center">
                <a class="text-50 d-flex align-items-center text-decoration-0">
                  <i 
                    class="material-icons mr-1" 
                    style="font-size: inherit;">favorite_border</i> 3</a>
                <a class="text-50 d-flex align-items-center text-decoration-0 ml-3">
                  <i 
                    class="material-icons mr-1" 
                    style="font-size: inherit;">thumb_up</i> 13</a>
              </div>
            </div>
          </div>
        </div>

        <b-btn 
          block
          variant="light"
          v-text="$t('Load more ...')" />
      </div>
    </div>
  </div>
</template>

<script>
  // import {
  //   AuthorBasic,
  //   PageSeparator
  // } from 'vue-luma'
  
  import {FmvAvatar} from 'fmv-avatar'
  import AuthorBasic from '~/components/Course/AuthorBasic.vue'
  import PageSeparator from '~/components/Ui/PageSeparator.vue'

  export default {
    components: {
      FmvAvatar,
      AuthorBasic,
      PageSeparator
    },
    props: {
      author: {
        type: Boolean,
        default() {
          return this.$root.layoutName === 'fixed'
        }
      }
    }
  }
</script>