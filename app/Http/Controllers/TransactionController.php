<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    public function index() {}

    public function create() {}

    public function store(Request $request) {}

    public function show(Transaction $transaction) {}

    public function edit(Transaction $transaction) {}

    public function update(Request $request, Transaction $transaction) {}

    public function destroy(Transaction $transaction) {}
}
