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

  <h4 class="m-0">Welcome back!</h4>
  <p class="mb-5">Login to access your Stack Account </p>

  <form method="POST" action="{{ route('login') }}" novalidate>
    @csrf

    <div class="form-group">
      <label class="text-label" for="email">{{ __('E-Mail Address') }}:</label>
      <div class="input-group input-group-merge">
        <input id="email" name="email" type="text" class="form-control form-control-prepended @error('email') is-invalid @enderror" placeholder="Your email address ..." value="{{ old('email', 'contact@mosaicpro.biz') }}" required autocomplete="email">

        <div class="input-group-prepend">
          <div class="input-group-text">
            <span class="far fa-envelope"></span>
          </div>
        </div>
      </div>
      @error('email')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="form-group">
      <label class="text-label" for="password">{{ __('Password') }}:</label>
      <div class="input-group input-group-merge">
        <input id="password" type="password" class="form-control form-control-prepended @error('password') is-invalid @enderror" name="password" placeholder="{{ __('Your password ...') }}" required autocomplete="current-password" value="12345678">

        <div class="input-group-prepend">
          <div class="input-group-text">
            <span class="fa fa-key"></span>
          </div>
        </div>
      </div>

      @error('password')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="form-group mb-5">
      <input class="mr-1" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
      <label class="form-check-label text-label" for="remember">
        {{ __('Remember Me') }}
      </label>
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary mb-5">{{ __('Login') }}</button><br>
      @if (Route::has('password.request'))
        <a href="{{ route('password.request') }}">{{ __('Forgot Password?') }}</a> <br>
      @endif

      Don't have an account? <a class="text-body text-underline" href="{{ route('register') }}">{{ __('Sign up') }}!</a>
    </div>
  </form>
</div>
@endsection
