@props(['value'])

<label {{ $attributes->merge(['class' => 'text-label']) }}>
    {{ $value ?? $slot }}
</label>
