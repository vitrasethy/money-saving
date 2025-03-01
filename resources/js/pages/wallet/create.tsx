import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wallet',
        href: '/wallet',
    },
    {
        title: 'Create Wallet',
        href: '/wallet/create',
    },
];

export default function WalletCreatePage() {
    const [wallet, setWallet] = useState({
        name: '',
        amount: '',
    });

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        const key = target.id;
        const value = target.value;
        setWallet((prevData) => ({ ...prevData, [key]: value }));
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post('/wallet', wallet);
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Wallet" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={handleSubmit}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Create Wallet</CardTitle>
                        </CardHeader>
                        <CardContent className="flex gap-6">
                            <div className="flex w-full flex-col gap-4">
                                <Label>Name</Label>
                                <Input id="name" name="name" onChange={handleChange} required />
                            </div>
                            <div className="flex w-full flex-col gap-4">
                                <Label>Amount</Label>
                                <Input id="amount" name="amount" onChange={handleChange} required />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className="ml-auto">Create</Button>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </AppLayout>
    );
}
