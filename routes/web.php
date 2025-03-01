<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('dashboard');
    })->name('home');
    Route::get('/transaction', function () {
        return Inertia::render('transaction');
    });
    Route::get('/budget', function () {
        return Inertia::render('budget');
    });
    Route::get('/saving', function () {
        return Inertia::render('saving');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
