@extends("flowdash::layouts.blank", [
  'bodyClass' => 'layout-login-centered-boxed'
])

@section('content')
{{-- <x-guest-layout> --}}
    <x-jet-authentication-card>
        <x-slot name="logo">
            <x-jet-authentication-card-logo />
        </x-slot>

        <x-jet-validation-errors class="mb-4" />

        @if (session('status'))
            <div class="alert alert-soft-success">
                <strong class="text-body">{{ session('status') }}</strong>
            </div>
        @endif

        <form method="POST" action="{{ route('login') }}">
            @csrf

            <div class="form-group">
                <x-jet-label for="email" value="{{ __('Email') }}" />
                <x-jet-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email') ?? 'contact@mosaicpro.biz'" required autofocus placeholder="{{ __('Enter your email') }}" />
            </div>

            <div class="form-group">
                <x-jet-label for="password" value="{{ __('Password') }}" />
                <x-jet-input id="password" class="block mt-1 w-full" type="password" name="password" required autocomplete="current-password" placeholder="{{ __('Enter your password') }}" :value="'12345678'" />
            </div>

            <div class="form-group d-flex align-items-center">
                <div class="flex">
                    <input class="mr-1" type="checkbox" name="remember" id="remember_me" {{ old('remember') ? 'checked' : '' }}>
                    <label class="form-check-label text-label" for="remember_me">
                        {{ __('Remember me') }}
                    </label>
                </div>
                <div>
                    @if (Route::has('password.request'))
                        <a class="text-body text-underline" href="{{ route('password.request') }}">
                            {{ __('Forgot your password?') }}
                        </a>
                    @endif
                </div>
            </div>

            <div class="d-flex flex-column text-center">
                <p>
                    <x-jet-button class="btn-block">
                        {{ __('Login') }}
                    </x-jet-button>
                </p>

                Don't have an account? <a class="text-body text-underline" href="{{ route('register') }}">{{ __('Sign up') }}!</a>
            </div>
        </form>
    </x-jet-authentication-card>
{{-- </x-guest-layout> --}}
@endsection
