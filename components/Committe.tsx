import Image from 'next/image';

const Committee = () => {
    const committeeMembers = [
        {
            name: 'Dr. Imran Mahmud',
            title: 'Head of Software Engineering Department',
            organization: 'Daffodil International University',
            designation: 'Convener',
            imageUrl: '/guests/dept head.jpeg',
        },
        {
            name: 'Mr. Md. Shohel Arman',
            title: 'Assistant Professor of Software Engineering Department',
            organization: 'Daffodil International University',
            designation: 'Co-Convener',
            imageUrl: '/guests/shohelarman.jpg',
        },
        {
            name: 'Musabbir Hasan Sammak',
            title: 'Lecturer of Software Engineering Department',
            organization: 'Daffodil International University',
            designation: 'Co-Convener',
            imageUrl: '/guests/sammak.jpg',
        },
    ];

    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-8">Committee Members</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {committeeMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6"
                        >
                            <div className="w-32 h-32 mx-auto mb-4">
                                <Image
                                    src={member.imageUrl}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-sm text-gray-600">{member.title}</p>
                            <p className="text-sm text-gray-500">{member.organization}</p>
                            <p className="text-sm text-gray-800">{member.designation}, Data Science Club DIU</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Committee;
