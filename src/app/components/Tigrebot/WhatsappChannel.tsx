import Image from 'next/image';
import Link from 'next/link';

const WhatsappChannel = () => {
  const today = new Date();
  const hora = today.toLocaleTimeString('pt-br');
  return (
    <div className='p-2 bg-[#E6FEDC] w-[450px] rounded-2xl shadow-xl'>
      <Link
        href="https://whatsapp.com/channel/0029VaAJYF7EgGfQHgnDtu2e"
        className='flex flex-row w-full bg-[#E0F5D4] rounded-2xl'
      >
        <div className='rounded-l-2xl'>
          <Image
            src="/wplogo.png"
            alt="TigreLOG - Feito de alma, garra e coração"
            width={120}
            height={120}
            className='rounded-l-2xl'
          />
        </div>
        <div className='p-2 flex flex-col items-start justify-center'>
          <p className='text-black font-semibold text-lg'>TigreLOG</p>
          <p className='text-sm text-neutral-700'>Convite para canal do WhatsApp</p>
          <p className='text-sm text-neutral-400'>whatsapp.com</p>
        </div>
      </Link>
      <div className='flex flex-col p-2 border-b-[1px] border-neutral-200'>
        <p>Siga o canal &quot;TigreLOG&quot; no WhatsApp:</p>
        <div className='flex justify-between'>
          <Link
            href='https://whatsapp.com/channel/0029VaAJYF7EgGfQHgnDtu2e'
            className='text-[#216D8A] font-normal w-5/6'
          >
            https://whatsapp.com/channel /0029VaAJYF7EgGfQHgnDtu2e
          </Link>
          <div className='flex flex-row w-1/6 items-end justify-end'>
            <p className='text-sm mr-1 font-light text-gray-500'>{hora.substring(0, 5)}</p>
            <Image
              src="/wpseen.svg"
              alt="Seen"
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
      <div className='p-4 flex items-center justify-center'>
        <Link
          href='https://whatsapp.com/channel/0029VaAJYF7EgGfQHgnDtu2e'
          className='text-[#216D8A] font-semibold'
        >
          Acessar canal
        </Link>
      </div>
    </div>
  );
};

export default WhatsappChannel;
