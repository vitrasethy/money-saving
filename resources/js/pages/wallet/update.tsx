import { Wallet, type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

export default function WalletUpdatePage({ wallet }: { wallet: Wallet }) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Wallet',
            href: '/wallet',
        },
        {
            title: `${wallet.id}`,
            href: `/wallet/${wallet.id}`,
        },
        {
            title: `Edit`,
            href: `/wallet/${wallet.id}/edit`,
        },
    ];

    const [editWallet, setEditWallet] = useState({
        name: wallet.name,
        amount: wallet.amount,
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const key = target.id;
        const value = target.value;
        setEditWallet((prevData) => ({ ...prevData, [key]: value }));
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.put(`/wallet/${wallet.id}`, editWallet);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Wallet" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Edi Wallet</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-6">
                            <div className="flex w-full flex-col gap-4">
                                <Label>Name</Label>
                                <Input id="name" name="name" onChange={handleChange} defaultValue={editWallet.name} required />
                            </div>
                            <div className="flex w-full flex-col gap-4">
                                <Label>Amount</Label>
                                <Input id="amount" name="amount" onChange={handleChange} defaultValue={editWallet.amount} required />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto">Edit</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
