import { getContributors, getReposByContributor } from "@/lib/content";
import { ContributorCard } from "@/components/content/contributor-card";
import { RepoCard } from "@/components/content/repo-card";

export default function AboutPage() {
  const contributors = getContributors();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <section data-section className="mb-12">
        <h1 className="text-2xl font-bold text-ctp-text mb-2">about</h1>
        <p className="text-ctp-overlay0 text-sm mb-8">
          :help kwerty
        </p>
        <div className="space-y-4 text-sm text-ctp-subtext0 leading-relaxed">
          <p>
            kwerty documents the keyboard-focused development workflows that
            ratataque and GrimalDev have built and refined over 4+ years. Every
            tool, every keybinding, every config exists because typing is faster
            than pointing.
          </p>
          <p>
            The philosophy is simple: your hands should never leave the home
            row. From window management to git operations, from file navigation
            to code editing -- everything is one keypress away.
          </p>
          <p>
            Two developers, two platforms, one shared obsession with efficiency.
            Linux and macOS workflows that converge on the same core tools:
            Neovim, tmux, Fish shell, and split ergonomic keyboards running
            custom ZMK firmware.
          </p>
        </div>
      </section>

      <section data-section className="mb-12">
        <h2 className="text-sm text-ctp-overlay0 mb-6 uppercase tracking-wider">
          contributors
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {contributors.map((c) => (
            <ContributorCard key={c.github} contributor={c} />
          ))}
        </div>
      </section>

      <section data-section className="mb-12">
        <h2 className="text-sm text-ctp-overlay0 mb-6 uppercase tracking-wider">
          shared tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            "Neovim",
            "tmux",
            "Fish shell",
            "Kitty",
            "lazygit",
            "Corne keyboard",
            "ZMK firmware",
            "Starship prompt",
          ].map((tool) => (
            <div
              key={tool}
              className="px-3 py-2 rounded border border-ctp-surface1 bg-ctp-surface0 text-xs text-ctp-subtext0 text-center"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>

      {contributors.map((c) => {
        const repos = getReposByContributor(c.name);
        return (
          <section key={c.github} data-section className="mb-12">
            <h2 className="text-sm text-ctp-overlay0 mb-6 uppercase tracking-wider">
              {c.name}&apos;s repos
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {repos.map((repo) => (
                <RepoCard key={repo.fullName} repo={repo} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
