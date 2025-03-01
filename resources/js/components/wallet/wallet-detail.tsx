import { Wallet } from '@/types';
import { Link } from '@inertiajs/react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';

export default function WalletDetail({ wallet }: { wallet: Wallet }) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-semibold">Wallet Detail</CardTitle>
                <Button asChild>
                    <Link href={`/wallet/${wallet.id}/edit`}>Edit Wallet</Link>
                </Button>
            </CardHeader>
            <CardContent>
                <div>
                    <Label>Wallet Name:</Label>
                    <h4 className="text-xl font-semibold">{wallet.name}</h4>
                </div>
                <div>
                    <Label>Wallet Amount:</Label>
                    <h4 className="text-xl font-semibold">{wallet.amount}</h4>
                </div>
            </CardContent>
        </Card>
    );
}
