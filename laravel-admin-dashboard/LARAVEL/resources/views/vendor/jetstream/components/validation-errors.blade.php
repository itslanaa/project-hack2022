@if ($errors->any())
    <div {{ $attributes->merge(['class' => 'alert alert-soft-danger']) }}>
        <p class="text-body font-weight-bold">{{ __('Whoops! Something went wrong.') }}</p>

        <ul class="mb-0">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
