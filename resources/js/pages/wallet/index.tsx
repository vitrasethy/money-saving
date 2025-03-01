import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import WalletTable from '@/components/wallet/wallet-table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, Wallet } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Wallet',
        href: '/wallet',
    },
];

export default function WalletIndexPage({ wallets }: { wallets: Wallet[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Wallet" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <Card>
                    <CardHeader className="flex">
                        <div className="ml-auto">
                            <Button asChild>
                                <Link href="/wallet/create">Create Wallet</Link>
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <WalletTable wallets={wallets} />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
