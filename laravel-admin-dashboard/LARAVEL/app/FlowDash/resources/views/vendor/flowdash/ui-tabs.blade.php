@extends("flowdash::layouts.{$layout}", [
  'title' => 'Tabs',
  'breadcrumb' => [[
    'title' => 'UI Components'
  ], [
    'title' => 'Tabs'
  ]],
  'new_button_label' => false
])

@section('content')
<div class="{{ $containerClass }} page__container">
  <div class="row">
    <div class="col-lg">
      <div class="card">
        <div class="card-header card-header-large bg-white d-flex align-items-center">
          <h4 class="card-header__title flex m-0">Recent Activity</h4>
          <div>
            <a href="javascript:void(0)" class="link-date">13/03/2018 <span class="text-muted mx-1">to</span> 20/03/2018</a>
          </div>
        </div>
        <div class="card-header card-header-tabs-basic nav" role="tablist">
          <a href="#activity_all" class="active" data-toggle="tab" role="tab" aria-controls="activity_all" aria-selected="true">All</a>
          <a href="#activity_purchases" data-toggle="tab" role="tab" aria-selected="false">Purchases</a>
          <a href="#activity_emails" data-toggle="tab" role="tab" aria-selected="false">Emails</a>
          <a href="#activity_quotes" data-toggle="tab" role="tab" aria-selected="false">Quotes</a>
        </div>
        <div class="card-body tab-content">
          <div class="tab-pane active show fade" id="activity_all">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam itaque accusamus quis, qui consectetur vero ut molestiae quo! Modi, blanditiis laudantium, rem facilis sapiente, voluptate nihil amet reprehenderit neque harum quidem, eligendi totam aut? Rem, fuga architecto perferendis, voluptatum repellat quia hic aut consequatur ducimus quidem maiores, iste sit tempore.
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg">
      <div class="z-0">
        <ul class="nav nav-tabs nav-tabs-custom" role="tablist">
          <li class="nav-item">
            <a href="#tab-21" class="nav-link active" data-toggle="tab" role="tab" aria-controls="tab-21" aria-selected="true">
              <span class="nav-link__count">03</span>
              Queue
            </a>
          </li>
          <li class="nav-item">
            <a href="#tab-22" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">
              <span class="nav-link__count">06</span>
              Earlier
            </a>
          </li>
          <li class="nav-item">
            <a href="#tab-23" class="nav-link" data-toggle="tab" role="tab" aria-selected="false">
              <span class="nav-link__count">05</span>
              Wait List
            </a>
          </li>
          <li class="nav-item">
            <a href="#tab-24" class="nav-link disabled" data-toggle="tab" role="tab" aria-selected="false">
              <span class="nav-link__count">0</span>
              No Show
            </a>
          </li>
        </ul>
        <div class="card">
          <div class="card-body tab-content">
            <div class="tab-pane active show fade" id="tab-21">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum accusantium mollitia ducimus iure ullam cumque iste quibusdam, possimus ex atque dolores earum accusamus non quo molestias dolorem aut voluptatibus sit, quos rerum. Pariatur qui veniam suscipit accusantium! Quos natus officiis commodi cum, facilis molestias cumque iusto ratione magnam tempora voluptatibus.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection