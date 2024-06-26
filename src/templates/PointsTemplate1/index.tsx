import EtherIcon from '@/../public/images/ether.png'
import EtherDeepIcon from '@/../public/images/ether-deep.png'
import { TemplateType } from '@/templates/pointsTemplates'
import { Typography } from '@material-tailwind/react'

export default {
    id: 'PointsTemplate1',
    name: 'AMM for Pts',
    token: 'ETH',
    chain: 'BASE/OP',
    protocol: 'Extra',
    dependence: 'Kelp Staked',
    templateType: 'Points Stack',
    targetToken: {
        icon: EtherIcon,
        title: 'WeETH'
    },
    tags: [{
        title: 'Base',
        icon: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg'
    }, {
        title: 'Defi'
    }, {
        title: 'Bridge'
    }],
    desc: (template: TemplateType) => (
        <p>
            Stake ETH on <span className="underline">Ether.Fi</span> and bridge WeETH via <span className="underline">Stargate</span>
        </p>),
    rewards: {
        points: [
            { title: 'Zero Points', number: '2' }
        ],
        token: [
            { icon: EtherDeepIcon, number: '2', title: 'ETHFI' }
        ]
    },
    enter: {
        forms: [{
            label: 'amount',
            type: 'ETHInput'
        }],
        steps: [
            {
                action: 'Approve',
                desc: 'ETH to Ether.Fi',
                contract: '0xedfa23602d0ec14714057867a78d01e94176bea0',
                contractLink: 'https://basescan.org/address/0xedfa23602d0ec14714057867a78d01e94176bea0'
            },
            {
                action: 'Enter',
                desc: 'ETH to Ether.Fi',
                contract: '0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055',
                contractLink: 'https://basescan.org/address/0xf9cFB8a62f50e10AdDE5Aa888B44cF01C5957055'
            }
        ],
    },
    exit: {
        forms: [],
        steps: []
    },
    details: () => <>
        <p>With official collaboration with Ether.fi. We can earn extra Ether.fi Loyalty Points by staking ETH. The Point Stack Strategy helps user to bridge $weETH to Base for further usage.</p>
        <Typography variant="h5">Rewards</Typography>
        <p>To grab both Ether.Fi and Zerolayer Point</p>
        <Typography variant="h5">Details Procedures</Typography>
        <ul className='list-disc pl-7 space-y-2'>
            <li>
                Step1: Connect Wallet
                <ul>
                    <li>Connect your Smart Wallet or register a new one directly through the connect wallet</li>
                </ul>
            </li>
            <li>
                Step2: Deposit ETH
                <ul>
                    <li>Ensure you have ETH readily available before carrying out further transactions. NB: There may be an extra gas fee required for activating the smart wallet for the first time on every chain.</li>
                </ul>
            </li>
            <li>
                Step3: Enter Amount
                <ul>
                    <li>Specify the amount of ETH you wish to use for this Strategy. You might also take at look the setup Icon on the right side corner.</li>
                </ul>
            </li>
            <li>
                Step4: Confirm Your Batch
                <ul>
                    <li>Connect your Smart Wallet or register a new one directly through the connect wallet</li>
                </ul>
            </li>
        </ul>
    </>
} as TemplateType