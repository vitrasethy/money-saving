<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWalletRequest;
use App\Http\Requests\UpdateWalletRequest;
use App\Models\Wallet;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WalletController extends Controller
{
    public function index()
    {
        $wallets = Wallet::where('user_id', Auth::id())->get();

        return Inertia::render('wallet/index', [
            'wallets' => $wallets,
        ]);
    }

    public function create()
    {
        return Inertia::render('wallet/create');
    }

    public function store(StoreWalletRequest $request)
    {
        $user = Auth::user();

        Wallet::create([
            'name' => $request->name,
            'amount' => $request->amount,
            'user_id' => $user->id,
        ]);

        return redirect()->route('wallet.index');
    }

    public function show(Wallet $wallet)
    {
        return Inertia::render('wallet/show', [
            'wallet' => $wallet,
        ]);
    }

    public function edit(Wallet $wallet)
    {
        return Inertia::render('wallet/update', [
            'wallet' => $wallet,
        ]);
    }

    public function update(UpdateWalletRequest $request, Wallet $wallet)
    {
        $wallet->update($request->validated());

        return redirect()->route('wallet.show', [
            'wallet' => $wallet->id,
        ]);
    }

    public function destroy(Wallet $wallet)
    {
        $wallet->delete();
    }
}
