@extends('layouts.app')

@section('content')
@foreach ($students as $student)
<ul>
    <li>{{$student->first_name}}</li>
</ul>
@endforeach
@endsection