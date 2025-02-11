import userProfile from '@/edit_this_data/userProfile';
import DownwardBouncingArrow from '@/components/downwardBouncingArrow';
import QuickLinkButton from '@/components/quickLinkButton';
import BlueGradientText from '@/components/blueGradientText';
import useIsBreakpointMet from '@/hooks/useIsBreakpointMet';

export default function TopSection() {
  const isSmBreakpointMet = useIsBreakpointMet().xs;
  return (
    <div className="w-full h-[100dvh] relative bottom-[50px]">
      <div className="w-full h-[100dvh] flex flex-col justify-center items-center">
        <div className="w-[75%] md:w-[55%] h-[50%] text-white text-2xl md:text-4xl font-semibold text-center">
          <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
            <div className="flex flex-col justify-center items-center gap-2 w-full font-black">
              <p>Hello.</p>
              <p>
                I&apos;m{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  {userProfile.firstName} {userProfile.lastName}
                </BlueGradientText>
                .
              </p>
              <p className="mb-8 lg:max-w-[65%]">
                A software engineer with{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  technical
                </BlueGradientText>{' '}
                skills & a drive to{' '}
                <BlueGradientText style={{ fontWeight: 900 }}>
                  improve
                </BlueGradientText>
              </p>
            </div>
            <div className="bg-red-500/0 flex flex-row justify-center items-stretch gap-4 md:gap-8 ">
              <QuickLinkButton
                href={userProfile.githubURL}
                customImageURL="/home/github.png"
              />
              <QuickLinkButton
                href={userProfile.linkedInURL}
                customImageURL="/home/linkedin_white.png"
              />
              <QuickLinkButton href={userProfile.resumeURL} text={'Resumé'} />
            </div>
          </div>
        </div>
      </div>
      {/* downward pointing arrow bouncing */}
      <DownwardBouncingArrow
        elementId="my-skills"
        verticalScrollPadding={isSmBreakpointMet ? -50 : 80}
      />
    </div>
  );
}
