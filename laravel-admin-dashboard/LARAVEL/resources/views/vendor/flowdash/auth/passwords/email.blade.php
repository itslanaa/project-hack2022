@extends("flowdash::layouts.blank", [
  'bodyClass' => 'layout-login'
])

@section('content')
<div class="layout-login__overlay"></div>
<div class="layout-login__form bg-white" data-perfect-scrollbar>
  <div class="d-flex justify-content-center mt-2 mb-5 navbar-light">
    <a href="{{ url('/') }}" class="navbar-brand" style="min-width: 0">
      <img class="navbar-brand-icon" src="/vendor/flowdash/images/stack-logo-blue.svg" width="25" alt="Stack">
      <span>Stack</span>
    </a>
  </div>

  <h4 class="m-0">{{ __('Forgot your password?') }}</h4>
  <p class="mb-5">We need you to confirm your e-mail.</p>

  @if (session('status'))
  <div class="alert alert-soft-warning">
    <div class="d-flex flex-wrap">
      <div class="mr-8pt">
        <i class="material-icons">check_circle</i>
      </div>
      <div class="flex" style="min-width: 180px">
        <small class="text-black-100">
          {{ session('status') }}
        </small>
      </div>
    </div>
  </div>
  @endif

  <form method="POST" action="{{ route('password.email') }}">
    @csrf

    <div class="form-group">
      <label class="form-label" for="email">{{ __('E-Mail Address') }}:</label>
      <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="{{ __('Your E-Mail Address') }} ...">
      <small class="form-text text-muted">We will email you with info on how to reset your password.</small>

      @error('email')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary btn-lg">
        {{ __('Send Password Reset Link') }}
      </button>
    </div>
  </form>

</div>
@endsection