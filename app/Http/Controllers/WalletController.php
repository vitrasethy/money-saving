<?php

namespace App\Http\Controllers;

use App\Models\Wallet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WalletController extends Controller
{
    public function index()
    {
        return Inertia::render('wallet/index', [
            'wallets' => Wallet::where('user_id', Auth::id())->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('wallet/create');
    }

    public function store(Request $request)
    {
        $user = Auth::user();

        Wallet::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'user_id' => $user->id
        ]);

        return redirect()->route('wallet.index');
    }

    public function show(Wallet $wallet)
    {
        return Inertia::render('wallet/show', ['wallet' => $wallet]);
    }

    public function edit(Wallet $wallet)
    {
        return Inertia::render('wallet/update', ['wallet' => $wallet]);
    }

    public function update(Request $request, Wallet $wallet)
    {
        $wallet->update([
            'name' => $request->name,
            'amount' => $request->amount,
        ]);

        return redirect()->route('wallet.show', ['wallet' => $wallet->id]);
    }

    public function destroy(Wallet $wallet)
    {
        $wallet->delete();
    }
}
