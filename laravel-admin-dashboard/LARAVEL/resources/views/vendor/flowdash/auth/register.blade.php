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

  <h4 class="m-0">Sign up!</h4>
  <p class="mb-5">Create an account with Stack</p>

  <form method="POST" action="{{ route('register') }}">
    @csrf
    <div class="form-group">
      <label class="text-label" for="name">{{ __('Name') }}:</label>
      <div class="input-group input-group-merge">
        <input id="name" type="text" class="form-control form-control-prepended @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="{{ __('Your Name ...') }}">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <span class="far fa-user"></span>
          </div>
        </div>
      </div>

      @error('name')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
      @enderror
    </div>
    <div class="form-group">
      <label class="text-label" for="email">{{ __('E-Mail Address') }}:</label>
      
      <div class="input-group input-group-merge">
        <input id="email" type="email" class="form-control form-control-prepended @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="{{ __('Your E-Mail Address') }} ...">
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
        <input id="password" type="password" class="form-control form-control-prepended @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="{{ __('Password') }} ...">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <span class="far fa-key"></span>
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
      <div class="custom-control custom-checkbox">
        <input type="checkbox" checked="" class="custom-control-input" id="terms" />
        <label class="custom-control-label" for="terms">I accept <a href="{{ url('/terms') }}">Terms and Conditions</a></label>
      </div> 
    </div>
    <div class="form-group text-center">
      <button type="submit" class="btn btn-primary mb-2">{{ __('Create Account') }}</button><br>
      <a class="text-body text-underline" href="{{ route('login') }}">Have an account? Login</a>
    </div>
  </form>
</div>
@endsection
