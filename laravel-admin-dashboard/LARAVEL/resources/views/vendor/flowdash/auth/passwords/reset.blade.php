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

  <h4 class="m-0">{{ __('Reset your password') }}</h4>
  <p class="mb-5">We need you to confirm your e-mail and your new password.</p>

  <form method="POST" action="{{ route('password.update') }}">
    @csrf
    <input type="hidden" name="token" value="{{ $token }}">

    <div class="form-group">
      <label class="form-label" for="email">{{ __('E-Mail Address') }}:</label>
      <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus placeholder="{{ __('Your E-Mail Address') }} ...">

      @error('email')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="form-group">
      <label class="form-label" for="password">{{ __('Password') }}:</label>
      <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="{{ __('Type a new password') }} ...">

      @error('password')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="form-group">
      <label class="form-label" for="password-confirm">{{ __('Confirm Password') }}:</label>
      <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="{{ __('Confirm your new password') }} ...">
    </div>
    <div class="text-center">
      <button type="submit" class="btn btn-primary btn-lg">
        {{ __('Reset Password') }}
      </button>
    </div>
  </form>

</div>
@endsection